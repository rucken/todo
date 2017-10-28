import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@rucken/core';
import { AccountService } from '@rucken/core';
import { AppService } from '@rucken/core';
import { UsersService } from '@rucken/core';
import { TodoProject } from '@rucken/todo-core';
import { ConfirmModalComponent } from '@rucken/web';
import { BaseResourcesGridComponent } from '@rucken/web';

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

  constructor(
    public usersService: UsersService,
    public accountService: AccountService,
    public app: AppService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService
  ) {
    super();
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
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.accessToAdd;
    itemModal.text = this.translateService.instant('Append');
    itemModal.title = this.translateService.instant('Append new user to project');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new User();
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showEditModal(item: any | User) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoUserModalComponent = this.app.modals(this.resolver).create(TodoUserModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.accessToChange;
    itemModal.text = this.translateService.instant('Save');
    itemModal.title = this.translateService.instant('Edit user');
    if (itemModal.readonly) {
      itemModal.title = this.translateService.instant('User info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new User(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showRemoveModal(item: any | User) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = this.translateService.instant('Remove');
    confirm.message = this.translateService.instant('Are you sure you want to remove a user from project?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
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
    this.cachedResourcesService.loadAll(this.searchText, filter);
  }
}
