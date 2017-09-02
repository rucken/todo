import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { TodoStatus } from './../../../shared/models/todo-status.model';
import { ModalDirective } from 'ngx-bootstrap';
import { AccountService } from 'rucken';
import { BaseResourceModalComponent } from 'rucken';
import { TextInputComponent } from 'rucken';

@Component({
  selector: 'todo-status-modal',
  templateUrl: './todo-status-modal.component.html',
  styleUrls: ['./todo-status-modal.component.scss']
})

export class TodoStatusModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  item: TodoStatus = new TodoStatus();
  @Input()
  modelMeta: any = TodoStatus.meta();
  @Output()
  onClose: EventEmitter<TodoStatusModalComponent> = new EventEmitter<TodoStatusModalComponent>();
  @Output()
  onOk: EventEmitter<TodoStatusModalComponent> = new EventEmitter<TodoStatusModalComponent>();

  save() {
    this.onOk.emit(this);
    return false;
  }
}
