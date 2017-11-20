import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { translate, User } from '@rucken/core';
import { UsersService } from '@rucken/core';
import { TodoProject } from '@rucken/todo-core';
import { ConfirmModalComponent } from '@rucken/web';
import { BaseResourcesGridComponent } from '@rucken/web';
import { takeUntil } from 'rxjs/operators';

import { TodoUserModalComponent } from './todo-user-modal/todo-user-modal.component';

@Component({
  selector: 'todo-users-grid',
  templateUrl: './todo-users-grid.component.html',
  styleUrls: ['./todo-users-grid.component.scss'],
  entryComponents: [TodoUserModalComponent, ConfirmModalComponent]
})
export class TodoUsersGridComponent extends BaseResourcesGridComponent {

  @Output()
  onSelectItems: EventEmitter<User[] | any>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  @Input()
  project?: TodoProject;
  modelMeta: any = TodoProject.meta();
  selectedItems: User[] | any[];
  cachedResourcesService: UsersService;

  usersService: UsersService;

  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.usersService = injector.get(UsersService);
    this.cachedResourcesService = this.usersService.createCache();
  }

  initAccesses(contentType?: string) {
    this.accessToRead = true;
    this.accessToManage = this.checkPermissions(['manage_todo-project']);
    this.accessToAdd = this.accessToManage ? this.accessToManage : this.checkPermissions(['add_user']);
    this.accessToChange = this.accessToManage ? this.accessToManage : this.checkPermissions(['change_user']);
    this.accessToDelete = this.accessToManage ? this.accessToManage : this.checkPermissions(['change_todo-project']);
  }
  get readonly() {
    return this.hardReadonly || !(this.accessToAdd || this.accessToChange);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoUserModalComponent = this.app.modals(this.resolver).create(TodoUserModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToAdd;
    itemModal.okTitle = translate('Append');
    itemModal.title = translate('Append new user to project');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new User();
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showEditModal(item: any | User) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoUserModalComponent = this.app.modals(this.resolver).create(TodoUserModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToChange;
    itemModal.okTitle = translate('Save');
    itemModal.title = translate('Edit user');
    if (itemModal.readonly) {
      itemModal.title = translate('User info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new User(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showRemoveModal(item: any | User) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = translate('Remove');
    confirm.message = translate('Are you sure you want to remove a user from project ? ');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      confirm.okInProcessFromStatus(status)
    );
  }
  save(itemModal: TodoUserModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (user: User | any) => {
        itemModal.modal.hide();
      }, (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(errors.message.join(', ')).subscribe(
            () => {
              itemModal.info.emit({ username: '' });
            });
        } else {
          itemModal.errors.emit(errors);
        }
      });
  }
  remove(itemModal: ConfirmModalComponent) {
    this.cachedResourcesService.remove(this.selectedItems).subscribe(
      () => {
        itemModal.modal.hide();
      },
      (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(errors.message.join(', ')).subscribe(
            () => {
              this.focus();
            });
        } else {
          itemModal.errors.emit(errors);
        }
      });
  }
  search(ignoreCache?: boolean) {
    const filter: any = {};
    filter.project = this.project && this.project.pk ? this.project.pk : null;
    this.cachedResourcesService.ignoreCache = ignoreCache;
    this.searchWithMockedItems(filter);
  }
}
