import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { TodoProject } from './../../../shared/models/todo-project.model';
import { User, BaseResourceModalComponent } from 'rucken';
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
  onSave: EventEmitter<TodoProjectsListModalComponent> = new EventEmitter<TodoProjectsListModalComponent>();

  item: any | TodoProject= new TodoProject();
  items: any[] | TodoProject[] = [];
  modelMeta: any = TodoProject.meta();

  selectTodoProject(items: any[] | TodoProject[]) {
    this.item = items[0];
    this.items = items;
  }
  select() {
    this.onSave.emit(this);
    return false;
  }
}
