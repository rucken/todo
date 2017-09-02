import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { TodoTask } from './../../../shared/models/todo-task.model';
import { User, BaseResourceModalComponent } from 'rucken';
import { ModalDirective } from 'ngx-bootstrap';
import { TodoTasksGridComponent } from '../todo-tasks-grid.component';

@Component({
  selector: 'todo-tasks-list-modal',
  templateUrl: './todo-tasks-list-modal.component.html',
  styleUrls: ['./todo-tasks-list-modal.component.scss']
})

export class TodoTasksListModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: ElementRef;
  @ViewChild('todoTasks')
  todoTasks: TodoTasksGridComponent;

  @Output()
  onClose: EventEmitter<TodoTasksListModalComponent> = new EventEmitter<TodoTasksListModalComponent>();
  @Output()
  onOk: EventEmitter<TodoTasksListModalComponent> = new EventEmitter<TodoTasksListModalComponent>();

  item: TodoTask = new TodoTask();
  items: TodoTask[] = [];
  modelMeta: any = TodoTask.meta();

  selectTodoTask(items: TodoTask[]) {
    this.item = items[0];
    this.items = items;
  }
}
