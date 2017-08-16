import { User } from 'rucken';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ElementRef } from '@angular/core';
import { TodoTask } from './../../shared/models/todo-task.model';
import { TodoTaskModalComponent } from './todo-task-modal/todo-task-modal.component';
import { ConfirmModalComponent } from 'rucken';
import { TodoTasksService } from '../../shared/todo-tasks.service';
import { AppService } from 'rucken';
import { AccountService } from 'rucken';
import { EndpointStatusEnum } from 'rucken';
import { MetaModel } from 'rucken';
import { BaseResourcesGridComponent } from 'rucken';
import { TranslateService } from '@ngx-translate/core';
import { TodoProject } from '../../shared/models/todo-project.model';

@Component({
  selector: 'todo-tasks-grid',
  templateUrl: './todo-tasks-grid.component.html',
  styleUrls: ['./todo-tasks-grid.component.scss'],
  entryComponents: [TodoTaskModalComponent, ConfirmModalComponent]
})
export class TodoTasksGridComponent extends BaseResourcesGridComponent {

  @Input()
  project?: any | TodoProject;
  @Output()
  onSelectItems: EventEmitter<TodoTask[] | any>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  modelMeta: any = TodoTask.meta();
  items: any[] | TodoTask[];
  selectedItems: any[] | TodoTask[];
  cachedResourcesService: TodoTasksService;

  constructor(
    public todoTasksService: TodoTasksService,
    public accountService: AccountService,
    public app: AppService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService
  ) {
    super();
    this.cachedResourcesService = todoTasksService.createCache();
  }
  get account(): User {
    return this.accountService.account;
  }
  get readonly() {
    return this.hardReadonly !== true || !this.account || !this.account.checkPermissions(['add_todo-task', 'change_todo-task', 'delete_todo-task']);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoTaskModalComponent = this.app.modals(this.resolver).create(TodoTaskModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['add_todo-task']);
    itemModal.text = this.translateService.instant('Create');
    itemModal.title = this.translateService.instant('Create new todo task');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoTask();
    itemModal.item.project = this.project;
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showEditModal(item: any | TodoTask) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoTaskModalComponent = this.app.modals(this.resolver).create(TodoTaskModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['change_todo-task']);
    itemModal.text = this.translateService.instant('Save');
    itemModal.title = this.translateService.instant('Edit todo task');
    if (itemModal.readonly) {
      itemModal.title = this.translateService.instant('Todo task info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoTask(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showRemoveModal(item: any | TodoTask) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = this.translateService.instant('Remove');
    confirm.message = this.translateService.instant('Are you sure you want to remove a todo task?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
  }
  save(itemModal: TodoTaskModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (todoTask: any | TodoTask) => {
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
