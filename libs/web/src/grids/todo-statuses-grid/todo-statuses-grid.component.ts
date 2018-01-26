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
import { translate } from '@rucken/core';
import { TodoStatusesService } from '@rucken/todo-core';
import { TodoStatus } from '@rucken/todo-core';
import { ShortTodoProject } from '@rucken/todo-core';
import { BaseResourcesGridComponent } from '@rucken/web';
import { ConfirmModalComponent } from '@rucken/web';
import { takeUntil } from 'rxjs/operators';

import { TodoStatusModalComponent } from './todo-status-modal/todo-status-modal.component';

@Component({
  selector: 'todo-statuses-grid',
  templateUrl: './todo-statuses-grid.component.html',
  styleUrls: ['./todo-statuses-grid.component.scss'],
  entryComponents: [TodoStatusModalComponent, ConfirmModalComponent]
})

export class TodoStatusesGridComponent extends BaseResourcesGridComponent {

  @Input()
  headerType = 'basic';
  @Output()
  onSelectItems: EventEmitter<TodoStatus[] | any>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  @Input()
  project?: ShortTodoProject;
  modelMeta: any = TodoStatus.meta();
  items: any[] | TodoStatus[];
  selectedItems: TodoStatus[];
  cachedResourcesService: TodoStatusesService;

  todoStatusesService: TodoStatusesService;

  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.todoStatusesService = injector.get(TodoStatusesService);
    this.cachedResourcesService = this.todoStatusesService.createCache();
  }

  get readonly() {
    return this.hardReadonly || !(this.accessToAdd || this.accessToChange || this.accessToDelete);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoStatusModalComponent = this.app.modals(this.resolver).create(TodoStatusModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToAdd;
    itemModal.okTitle = translate('Create');
    itemModal.title = translate('Create new todo status');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoStatus();
    itemModal.item.project = this.project as ShortTodoProject;
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showEditModal(item: TodoStatus) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoStatusModalComponent = this.app.modals(this.resolver).create(TodoStatusModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToChange;
    itemModal.okTitle = translate('Save');
    itemModal.title = translate('Edit todo status');
    if (itemModal.readonly) {
      itemModal.title = translate('Todo status info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoStatus(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showRemoveModal(item: TodoStatus) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = translate('Remove');
    confirm.message = translate('Are you sure you want to remove a todo status ? ');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      confirm.okInProcessFromStatus(status)
    );
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
    this.searchWithMockedItems(filter);
  }
}
