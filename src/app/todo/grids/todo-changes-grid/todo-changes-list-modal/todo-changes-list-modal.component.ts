import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TodoChange } from './../../../shared/models/todo-change.model';
import { BaseResourceModalComponent } from 'rucken';
import { ModalDirective } from 'ngx-bootstrap';
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
  onSave: EventEmitter<TodoChangesListModalComponent> = new EventEmitter<TodoChangesListModalComponent>();

  item: any | TodoChange = new TodoChange();
  items: any[] | TodoChange[] = [];
  modelMeta: any = TodoChange.meta();

  selectTodoChange(items: any[] | TodoChange[]) {
    this.item = items[0];
    this.items = items;
  }
  select() {
    this.onSave.emit(this);
    return false;
  }
}
