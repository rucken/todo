import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { TodoProject } from './../../../shared/models/todo-project.model';
import { ModalDirective } from 'ngx-bootstrap';
import { UsersGridComponent } from 'rucken';
import { BaseResourceModalComponent } from 'rucken';
import { TextInputComponent } from 'rucken';
import { TodoStatusesGridComponent } from '../../todo-statuses-grid/todo-statuses-grid.component';

@Component({
  selector: 'todo-project-modal',
  templateUrl: './todo-project-modal.component.html',
  styleUrls: ['./todo-project-modal.component.scss']
})

export class TodoProjectModalComponent extends BaseResourceModalComponent {

  @ViewChild('statusesGrid')
  statusesGrid: TodoStatusesGridComponent;
  @ViewChild('usersGrid')
  usersGrid: UsersGridComponent;
  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  item: any | TodoProject = new TodoProject();
  @Input()
  modelMeta: any = TodoProject.meta();
  @Output()
  onClose: EventEmitter<TodoProjectModalComponent> = new EventEmitter<TodoProjectModalComponent>();
  @Output()
  onSave: EventEmitter<TodoProjectModalComponent> = new EventEmitter<TodoProjectModalComponent>();

  afterOpen() {
    this.usersGrid.meta.perPage = 10;
    this.usersGrid.mockedItems = this.item.users;
    this.usersGrid.search();
    this.statusesGrid.project = this.item;
    this.statusesGrid.search();
  }
  save() {
    this.item.users = this.usersGrid.mockedItems;
    this.onSave.emit(this);
    return false;
  }
}
