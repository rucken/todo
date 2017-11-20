import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ShortTodoProject } from '@rucken/todo-core';
import { TodoTask } from '@rucken/todo-core';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { TodoTasksGridComponent } from './../todo-tasks-grid.component';

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
