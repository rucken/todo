import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { TodoProject } from '@rucken/todo-core';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap';

import { TodoProjectsGridComponent } from '../todo-projects-grid.component';

@Component({
  selector: 'todo-projects-list-modal',
  templateUrl: './todo-projects-list-modal.component.html',
  styleUrls: ['./todo-projects-list-modal.component.scss']
})
export class TodoProjectsListModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: ElementRef;
  @ViewChild('todoProjects')
  todoProjects: TodoProjectsGridComponent;

  @Output()
  onClose: EventEmitter<TodoProjectsListModalComponent> = new EventEmitter<TodoProjectsListModalComponent>();
  @Output()
  onOk: EventEmitter<TodoProjectsListModalComponent> = new EventEmitter<TodoProjectsListModalComponent>();

  item: TodoProject= new TodoProject();
  items: TodoProject[] = [];
  modelMeta: any = TodoProject.meta();

  selectTodoProject(items: TodoProject[]) {
    this.item = items[0];
    this.items = items;
  }
}
