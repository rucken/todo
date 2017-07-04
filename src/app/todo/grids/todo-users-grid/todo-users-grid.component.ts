import { TodoProject } from '../../shared/models/todo-project.model';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ElementRef } from '@angular/core';
import { User } from 'rucken';
import { ConfirmModalComponent } from 'rucken';
import { AccountService } from 'rucken';
import { AppService } from 'rucken';
import { UsersService } from 'rucken';
import { EndpointStatusEnum } from 'rucken';
import { MetaModel } from 'rucken';
import { BaseResourcesGridComponent } from 'rucken';
import { TranslateService } from '@ngx-translate/core';
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
    this.cachedResourcesService = usersService.createCache();
  }
  get account(): User | any {
    return this.accountService.account;
  }
  get readonly() {
    return this.hardReadonly !== true || !this.account || !this.account.checkPermissions(['add_user', 'change_user', 'delete_user']);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoUserModalComponent = this.app.modals(this.resolver).create(TodoUserModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['add_user']);
    itemModal.text = this.translateService.instant('Create');
    itemModal.title = this.translateService.instant('Create new user');
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
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['change_user']);
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
    confirm.message = this.translateService.instant('Are you sure you want to remove a user?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
  }
  save(itemModal: TodoUserModalComponent) {
    if (!itemModal.item.pk) {
      if (this.cachedResourcesService.items.length > 0) {

        const lastItem = this.cachedResourcesService.items.reduce((prev: User, cur: User, index: number, users: User[]) => {
          return prev && cur && Math.abs(+prev.pk) < Math.abs(+cur.pk) ? cur : prev;
        })[0];

        if (lastItem) {
          itemModal.item.id = lastItem.pk + 1;
        } else {
          itemModal.item.id = +this.cachedResourcesService.items[0].pk + 1;
        }
      } else {
        itemModal.item.id = 1;
      }
      itemModal.item.id = itemModal.item.pk * -1;
    }
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
}
