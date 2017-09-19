import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { TodoProject } from './../../../shared/models/todo-project.model';
import { ModalDirective } from 'ngx-bootstrap';
import { BaseResourceModalComponent } from 'rucken';
import { TextInputComponent } from 'rucken';
import { TodoStatusesGridComponent } from '../../todo-statuses-grid/todo-statuses-grid.component';
import { TodoUsersGridComponent } from '../../todo-users-grid/todo-users-grid.component';

@Component({
  selector: 'todo-project-modal',
  templateUrl: './todo-project-modal.component.html',
  styleUrls: ['./todo-project-modal.component.scss']
})

export class TodoProjectModalComponent extends BaseResourceModalComponent {

  @ViewChild('statusesGrid')
  statusesGrid: TodoStatusesGridComponent;
  @ViewChild('usersGrid')
  usersGrid: TodoUsersGridComponent;
  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  item: TodoProject = new TodoProject();
  @Input()
  modelMeta: any = TodoProject.meta();
  @Output()
  onClose: EventEmitter<TodoProjectModalComponent> = new EventEmitter<TodoProjectModalComponent>();
  @Output()
  onOk: EventEmitter<TodoProjectModalComponent> = new EventEmitter<TodoProjectModalComponent>();

  afterOpen() {
    this.usersGrid.meta.perPage = 10;
    this.usersGrid.mockedItems = this.item.users;
    this.usersGrid.search();
    this.statusesGrid.meta.perPage = 10;
    this.statusesGrid.mockedItems = this.item.statuses;
    this.statusesGrid.search();
  }
  ok() {
    this.item.users = this.usersGrid.mockedItems;
    this.item.statuses = this.statusesGrid.mockedItems;
    return super.ok();
  }
}
