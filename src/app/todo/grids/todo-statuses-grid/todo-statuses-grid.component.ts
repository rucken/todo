import { User } from 'rucken';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ElementRef } from '@angular/core';
import { TodoStatus } from './../../shared/models/todo-status.model';
import { TodoStatusModalComponent } from './todo-status-modal/todo-status-modal.component';
import { ConfirmModalComponent } from 'rucken';
import { TodoStatusesService } from '../../shared/todo-statuses.service';
import { AppService } from 'rucken';
import { AccountService } from 'rucken';
import { EndpointStatusEnum } from 'rucken';
import { MetaModel } from 'rucken';
import { BaseResourcesGridComponent } from 'rucken';
import { TranslateService } from '@ngx-translate/core';
import { ShortTodoProject } from '../../shared/models/short-todo-project.model';
@Component({
  selector: 'todo-statuses-grid',
  templateUrl: './todo-statuses-grid.component.html',
  styleUrls: ['./todo-statuses-grid.component.scss'],
  entryComponents: [TodoStatusModalComponent, ConfirmModalComponent]
})

export class TodoStatusesGridComponent extends BaseResourcesGridComponent {

  @Input()
  headerType: string = 'basic';
  @Output()
  onSelectItems: EventEmitter<TodoStatus[] | any>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  @Input()
  project?: ShortTodoProject;
  modelMeta: any = TodoStatus.meta();
  items: TodoStatus[];
  selectedItems: TodoStatus[];
  cachedResourcesService: TodoStatusesService;

  constructor(
    public todoStatusesService: TodoStatusesService,
    public accountService: AccountService,
    public app: AppService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService
  ) {
    super();
    this.cachedResourcesService = todoStatusesService.createCache();
  }
  get account(): User {
    return this.accountService.account;
  }
  get readonly() {
    return this.hardReadonly || !this.account || !this.account.checkPermissions(['add_todo-status', 'change_todo-status', 'delete_todo-status']);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoStatusModalComponent = this.app.modals(this.resolver).create(TodoStatusModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['add_todo-status']);
    itemModal.text = this.translateService.instant('Create');
    itemModal.title = this.translateService.instant('Create new todo status');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoStatus();
    itemModal.item.project = this.project;
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showEditModal(item: TodoStatus) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoStatusModalComponent = this.app.modals(this.resolver).create(TodoStatusModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['change_todo-status']);
    itemModal.text = this.translateService.instant('Save');
    itemModal.title = this.translateService.instant('Edit todo status');
    if (itemModal.readonly) {
      itemModal.title = this.translateService.instant('Todo status info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoStatus(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showRemoveModal(item: TodoStatus) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = this.translateService.instant('Remove');
    confirm.message = this.translateService.instant('Are you sure you want to remove a todo status?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
  }
  save(itemModal: TodoStatusModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (todoStatus: TodoStatus) => {
        itemModal.modal.hide();
      }, (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(errors.message.join(', ')).subscribe(
            () => {
              itemModal.info.emit({ name: '' });
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
