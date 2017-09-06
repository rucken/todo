import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { User } from 'rucken';
import { ModalDirective } from 'ngx-bootstrap';
import { AccountService } from 'rucken';
import { TextInputComponent } from 'rucken';
import { Group, BaseResourceModalComponent } from 'rucken';
import { UserGroup } from 'rucken';

@Component({
  selector: 'todo-user-modal',
  templateUrl: './todo-user-modal.component.html',
  styleUrls: ['./todo-user-modal.component.scss']
})

export class TodoUserModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  account: any | User = null;
  @Input()
  item: any | User = new User();
  @Input()
  modelMeta: any = User.meta();
  @Output()
  onClose: EventEmitter<TodoUserModalComponent | any> = new EventEmitter();
  @Output()
  onOk: EventEmitter<TodoUserModalComponent | any> = new EventEmitter();
}
