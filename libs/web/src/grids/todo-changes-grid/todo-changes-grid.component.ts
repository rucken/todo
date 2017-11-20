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
import { ShortTodoProject } from '@rucken/todo-core';
import { TodoChangesService } from '@rucken/todo-core';
import { TodoChange } from '@rucken/todo-core';
import { BaseResourcesGridComponent } from '@rucken/web';
import { ConfirmModalComponent } from '@rucken/web';
import { takeUntil } from 'rxjs/operators';

import { TodoChangeModalComponent } from './todo-change-modal/todo-change-modal.component';

@Component({
  selector: 'todo-changes-grid',
  templateUrl: './todo-changes-grid.component.html',
  styleUrls: ['./todo-changes-grid.component.scss'],
  entryComponents: [TodoChangeModalComponent, ConfirmModalComponent]
})
export class TodoChangesGridComponent extends BaseResourcesGridComponent {

  @Input()
  project?: ShortTodoProject;
  @Output()
  onSelectItems: EventEmitter<TodoChange[] | any>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  modelMeta: any = TodoChange.meta();
  items: TodoChange[];
  selectedItems: TodoChange[];
  cachedResourcesService: TodoChangesService;

  todoChangesService: TodoChangesService;

  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.todoChangesService = injector.get(TodoChangesService);
    this.cachedResourcesService = this.todoChangesService.createCache();
  }
  get readonly() {
    return this.hardReadonly || !(this.accessToAdd || this.accessToChange || this.accessToDelete);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoChangeModalComponent = this.app.modals(this.resolver).create(TodoChangeModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToAdd;
    itemModal.okTitle = translate('Create');
    itemModal.title = translate('Create new todo change');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoChange();
    itemModal.item.project = this.project;
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showEditModal(item: TodoChange) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoChangeModalComponent = this.app.modals(this.resolver).create(TodoChangeModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToChange;
    itemModal.okTitle = translate('Save');
    itemModal.title = translate('Edit todo change');
    if (itemModal.readonly) {
      itemModal.title = translate('Todo change info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoChange(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showRemoveModal(item: TodoChange) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = translate('Remove');
    confirm.message = translate('Are you sure you want to remove a todo change ? ');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      confirm.okInProcessFromStatus(status)
    );
  }
  save(itemModal: TodoChangeModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (todoChange: TodoChange) => {
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
