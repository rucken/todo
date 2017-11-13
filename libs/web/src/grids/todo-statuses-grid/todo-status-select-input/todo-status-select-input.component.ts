import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, Output, ViewChild } from '@angular/core';
import { translate } from '@rucken/core';
import { ShortTodoProject } from '@rucken/todo-core';
import { TodoStatus } from '@rucken/todo-core';
import { TodoStatusesService } from '@rucken/todo-core';
import { BaseResourceSelectInputComponent } from '@rucken/web';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';

import { TodoStatusesListModalComponent } from '../todo-statuses-list-modal/todo-statuses-list-modal.component';

@Component({
  selector: 'todo-status-select-input',
  templateUrl: './todo-status-select-input.component.html',
  styleUrls: ['./todo-status-select-input.component.scss'],
  entryComponents: [TodoStatusesListModalComponent]
})

export class TodoStatusSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('inputElement')
  inputElement: any;
  @ViewChild('tooltip')
  tooltip: TooltipDirective;

  @Input()
  project?: ShortTodoProject;
  @Input()
  name = 'todoStatus';
  @Input()
  model: TodoStatus = new TodoStatus();
  @Output()
  modelChange: EventEmitter<TodoStatus> = new EventEmitter<TodoStatus>();

  items: TodoStatus[];
  cachedResourcesService: TodoStatusesService;

  todoProjectsService: TodoStatusesService;

  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.todoStatusesService = injector.get(TodoStatusesService);
    this.cachedResourcesService = this.todoStatusesService.createCache();
  }
  search() {
    const filter: any = {};
    if (this.project) {
      filter.project = this.project.pk;
    }
    this.cachedResourcesService.ignoreCache = true;
    this.cachedResourcesService.loadAll('', filter);
  }
  onLookup() {
    const itemModal: TodoStatusesListModalComponent =
      this.app.modals(this.resolver).create(TodoStatusesListModalComponent);
    itemModal.project = this.project;
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.okTitle = translate('Select');
    itemModal.title = translate('Todo statuses');
    itemModal.project = this.project;
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
