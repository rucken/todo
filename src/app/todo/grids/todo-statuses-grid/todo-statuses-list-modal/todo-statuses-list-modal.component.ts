import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { TodoStatus } from './../../../shared/models/todo-status.model';
import { BaseResourceModalComponent } from 'rucken';
import { ModalDirective } from 'ngx-bootstrap';
import { TodoStatusesGridComponent } from '../todo-statuses-grid.component';
import { TodoProject } from '../../../shared/models/todo-project.model';

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
  @ViewChild('todoStatuses')
  todoStatuses: TodoStatusesGridComponent;

  @Input()
  project?: any | TodoProject;
  @Output()
  onClose: EventEmitter<TodoStatusesListModalComponent> = new EventEmitter<TodoStatusesListModalComponent>();
  @Output()
  onSave: EventEmitter<TodoStatusesListModalComponent> = new EventEmitter<TodoStatusesListModalComponent>();

  item: any | TodoStatus;
  items: any[] | TodoStatus[] = [];
  modelMeta: any = TodoStatus.meta();

  afterInit() {
    this.modal.onHidden.subscribe(() => this.close());
    this.modal.onShown.subscribe(() => {
      this.todoStatuses.search(true);
      this.focus();
    });
  }
  focus() {
    this.todoStatuses.focus();
  }
  selectTodoStatus(items: any[] | TodoStatus[]) {
    this.item = items[0];
    this.items = items;
  }
  select() {
    this.onSave.emit(this);
    return false;
  }
}
