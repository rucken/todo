import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap';

import { ShortTodoProject } from '../../../shared/models/short-todo-project.model';
import { TodoTasksGridComponent } from '../todo-tasks-grid.component';
import { TodoTask } from './../../../shared/models/todo-task.model';

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

  @Input()
  project?: ShortTodoProject;
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
