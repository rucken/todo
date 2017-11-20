import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from '@rucken/core';
import { BaseResourceModalComponent } from '@rucken/web';
import { TextInputComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  item: any | User = new User();
  @Input()
  modelMeta: any = User.meta();
  @Output()
  onClose: EventEmitter<TodoUserModalComponent | any> = new EventEmitter();
  @Output()
  onOk: EventEmitter<TodoUserModalComponent | any> = new EventEmitter();
}
