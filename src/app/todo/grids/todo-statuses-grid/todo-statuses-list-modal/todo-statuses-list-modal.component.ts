import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { TodoStatus } from './../../../shared/models/todo-status.model';
import { BaseResourceModalComponent } from 'rucken';
import { ModalDirective } from 'ngx-bootstrap';
import { TodoStatusesGridComponent } from '../todo-statuses-grid.component';
import { ShortTodoProject } from '../../../shared/models/short-todo-project.model';

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

  item: TodoStatus;
  items: TodoStatus[] = [];
  modelMeta: any = TodoStatus.meta();

  focus() {
    this.statuses.focus();
  }
  selectTodoStatus(items: TodoStatus[]) {
    this.item = items[0];
    this.items = items;
  }
}
