import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Injector, Output, ViewChild } from '@angular/core';
import { translate } from '@rucken/core';
import { TodoProjectsService } from '@rucken/todo-core';
import { TodoProject } from '@rucken/todo-core';
import { ConfirmModalComponent } from '@rucken/web';
import { BaseResourcesGridComponent } from '@rucken/web';

import { TodoProjectModalComponent } from './todo-project-modal/todo-project-modal.component';

@Component({
  selector: 'todo-projects-grid',
  templateUrl: './todo-projects-grid.component.html',
  styleUrls: ['./todo-projects-grid.component.scss'],
  entryComponents: [TodoProjectModalComponent, ConfirmModalComponent]
})

export class TodoProjectsGridComponent extends BaseResourcesGridComponent {

  @Output()
  onSelectItems: EventEmitter<TodoProject[] | any>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  modelMeta: any = TodoProject.meta();
  items: TodoProject[];
  selectedItems: TodoProject[];
  cachedResourcesService: TodoProjectsService;

  todoProjectsService: TodoProjectsService;

  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.todoProjectsService = injector.get(TodoProjectsService);
    this.cachedResourcesService = this.todoProjectsService.createCache();
  }
  get readonly() {
    return this.hardReadonly || !(this.accessToAdd || this.accessToChange || this.accessToDelete);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoProjectModalComponent = this.app.modals(this.resolver).create(TodoProjectModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToAdd;
    itemModal.okTitle = translate('Create');
    itemModal.title = translate('Create new todo project');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoProject();
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.takeUntil(this.destroyed$).subscribe(status =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showEditModal(item: TodoProject) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: TodoProjectModalComponent = this.app.modals(this.resolver).create(TodoProjectModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToChange;
    itemModal.okTitle = translate('Save');
    itemModal.title = translate('Edit todo project');
    if (itemModal.readonly) {
      itemModal.title = translate('Todo project info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new TodoProject(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.takeUntil(this.destroyed$).subscribe(status =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showRemoveModal(item: TodoProject) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = translate('Remove');
    confirm.message = translate('Are you sure you want to remove a todo project?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
    this.cachedResourcesService.changeStatusItem$.takeUntil(this.destroyed$).subscribe(status =>
      confirm.okInProcessFromStatus(status)
    );
  }
  save(itemModal: TodoProjectModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (todoProject: TodoProject) => {
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
}
