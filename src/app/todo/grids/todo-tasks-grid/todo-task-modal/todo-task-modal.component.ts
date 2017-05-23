import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { TodoTask } from './../../../shared/models/todo-task.model';
import { ModalDirective } from 'ngx-bootstrap';
import { AccountService } from 'rucken';
import { User, BaseResourceModalComponent } from 'rucken';
import { TextInputComponent } from 'rucken';

@Component({
  selector: 'todo-task-modal',
  templateUrl: './todo-task-modal.component.html',
  styleUrls: ['./todo-task-modal.component.scss']
})

export class TodoTaskModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  item: any | TodoTask = new TodoTask();
  @Input()
  modelMeta: any = TodoTask.meta();
  @Output()
  onClose: EventEmitter<TodoTaskModalComponent> = new EventEmitter<TodoTaskModalComponent>();
  @Output()
  onSave: EventEmitter<TodoTaskModalComponent> = new EventEmitter<TodoTaskModalComponent>();

  save() {
    this.onSave.emit(this);
    return false;
  }
}
