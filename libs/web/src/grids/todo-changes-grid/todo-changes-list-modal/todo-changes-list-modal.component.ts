import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TodoChange } from '@rucken/todo-core';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { TodoChangesGridComponent } from '../todo-changes-grid.component';

@Component({
  selector: 'todo-changes-list-modal',
  templateUrl: './todo-changes-list-modal.component.html',
  styleUrls: ['./todo-changes-list-modal.component.scss']
})

export class TodoChangesListModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TodoChangesGridComponent;
  @ViewChild('todoChanges')
  todoChanges: TodoChangesGridComponent;

  @Output()
  onClose: EventEmitter<TodoChangesListModalComponent> = new EventEmitter<TodoChangesListModalComponent>();
  @Output()
  onOk: EventEmitter<TodoChangesListModalComponent> = new EventEmitter<TodoChangesListModalComponent>();

  item: TodoChange = new TodoChange();
  items: TodoChange[] = [];
  modelMeta: any = TodoChange.meta();

  selectTodoChange(items: TodoChange[]) {
    this.item = items ? items[0] : null;
    this.items = items;
  }
}
