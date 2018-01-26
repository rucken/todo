import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ShortTodoProject } from '@rucken/todo-core';
import { TodoStatus } from '@rucken/todo-core';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { TodoStatusesGridComponent } from './../todo-statuses-grid.component';

@Component({
  selector: 'todo-statuses-list-modal',
  templateUrl: './todo-statuses-list-modal.component.html',
  styleUrls: ['./todo-statuses-list-modal.component.scss']
})

export class TodoStatusesListModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: ElementRef;
  @ViewChild('statuses')
  statuses: TodoStatusesGridComponent;

  @Input()
  project?: ShortTodoProject;
  @Output()
  onClose: EventEmitter<TodoStatusesListModalComponent> = new EventEmitter<TodoStatusesListModalComponent>();
  @Output()
  onOk: EventEmitter<TodoStatusesListModalComponent> = new EventEmitter<TodoStatusesListModalComponent>();

  item: any | TodoStatus;
  items: any[] | TodoStatus[] = [];
  modelMeta: any = TodoStatus.meta();

  focus() {
    this.statuses.focus();
  }
  selectTodoStatus(items: TodoStatus[]) {
    this.item = items ? items[0] : null;
    this.items = items;
  }
}
