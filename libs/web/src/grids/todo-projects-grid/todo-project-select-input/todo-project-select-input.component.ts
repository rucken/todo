import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, Output, ViewChild } from '@angular/core';
import { translate } from '@rucken/core';
import { TodoProject } from '@rucken/todo-core';
import { TodoProjectsService } from '@rucken/todo-core';
import { BaseResourceSelectInputComponent } from '@rucken/web';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';

import { TodoProjectsListModalComponent } from '../todo-projects-list-modal/todo-projects-list-modal.component';

@Component({
  selector: 'todo-project-select-input',
  templateUrl: './todo-project-select-input.component.html',
  styleUrls: ['./todo-project-select-input.component.scss'],
  entryComponents: [TodoProjectsListModalComponent]
})
export class TodoProjectSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('tooltip')
  tooltip: TooltipDirective;
  @ViewChild('inputElement')
  inputElement: any;

  @Input()
  name = 'todoProject';
  @Input()
  model: TodoProject = new TodoProject();
  @Output()
  modelChange: EventEmitter<TodoProject> = new EventEmitter<TodoProject>();

  items: TodoProject[];
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
  onLookup() {
    const itemModal: TodoProjectsListModalComponent =
      this.app.modals(this.resolver).create(TodoProjectsListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.okTitle = translate('Select');
    itemModal.title = translate('Todo projects');
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
