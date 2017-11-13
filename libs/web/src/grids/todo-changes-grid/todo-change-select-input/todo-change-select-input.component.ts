import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, Output, ViewChild } from '@angular/core';
import { translate } from '@rucken/core';
import { TodoChange } from '@rucken/todo-core';
import { TodoChangesService } from '@rucken/todo-core';
import { BaseResourceSelectInputComponent } from '@rucken/web';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';

import { TodoChangesListModalComponent } from '../todo-changes-list-modal/todo-changes-list-modal.component';

@Component({
  selector: 'todo-change-select-input',
  templateUrl: './todo-change-select-input.component.html',
  styleUrls: ['./todo-change-select-input.component.scss'],
  entryComponents: [TodoChangesListModalComponent]
})
export class TodoChangeSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('inputElement')
  inputElement: any;
  @ViewChild('tooltip')
  tooltip: TooltipDirective;

  @Input()
  name = 'todoChange';
  @Input()
  model: TodoChange = new TodoChange();
  @Output()
  modelChange: EventEmitter<TodoChange> = new EventEmitter<TodoChange>();

  items: TodoChange[];
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
  onLookup() {
    const itemModal: TodoChangesListModalComponent =
      this.app.modals(this.resolver).create(TodoChangesListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.okTitle = translate('Select');
    itemModal.title = translate('Todo changes');
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
