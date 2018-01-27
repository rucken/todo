import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, Output, ViewChild } from '@angular/core';
import { ShortTodoProject } from '@rucken/todo-core';
import { TodoTask } from '@rucken/todo-core';
import { TodoTasksService } from '@rucken/todo-core';
import { translate } from '@rucken/core';
import { BaseResourceSelectInputComponent } from '@rucken/web';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';

import { TodoTasksListModalComponent } from '../todo-tasks-list-modal/todo-tasks-list-modal.component';

@Component({
  selector: 'todo-task-select-input',
  templateUrl: './todo-task-select-input.component.html',
  styleUrls: ['./todo-task-select-input.component.scss'],
  entryComponents: [TodoTasksListModalComponent]
})
export class TodoTaskSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('inputElement')
  inputElement: any;
  @ViewChild('tooltip')
  tooltip: TooltipDirective;

  @Input()
  project?: ShortTodoProject;
  @Input()
  name = 'todoTask';
  @Input()
  model: TodoTask = new TodoTask();
  @Output()
  modelChange: EventEmitter<TodoTask> = new EventEmitter<TodoTask>();

  items: any[] | TodoTask[];
  cachedResourcesService: TodoTasksService;

  todoTasksService: TodoTasksService;

  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.todoTasksService = injector.get(TodoTasksService);
    this.cachedResourcesService = this.todoTasksService.createCache();
  }

  onLookup() {
    const itemModal: TodoTasksListModalComponent =
      this.app.modals(this.resolver).create(TodoTasksListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.project = this.project;
    itemModal.okTitle = translate('Select');
    itemModal.title = translate('Todo tasks');
    itemModal.onOk.subscribe(($event: any) => {
      this.value = itemModal.item;
      if (this.inputElement) {
        this.inputElement.value = this.value.pk;
      }
      if (this.inputReadonly === false) {
        this.valueAsString = '';
      }
      itemModal.modal.hide();
    });
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = this.value;
    itemModal.modal.show();
  }
}
