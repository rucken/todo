import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { TodoChange } from './../../../shared/models/todo-change.model';
import { ModalDirective } from 'ngx-bootstrap';
import { AccountService } from 'rucken';
import { BaseResourceModalComponent } from 'rucken';
import { TextInputComponent } from 'rucken';
import { ViewEncapsulation } from '@angular/core';
import { TodoProjectSelectInputComponent } from '../../todo-projects-grid/todo-project-select-input/todo-project-select-input.component';
@Component({
  selector: 'todo-change-modal',
  templateUrl: './todo-change-modal.component.html',
  styleUrls: ['./todo-change-modal.component.scss'],
  encapsulation: ViewEncapsulation.None  // Enable dynamic HTML styles
})

export class TodoChangeModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TodoProjectSelectInputComponent;

  @Input()
  item: TodoChange = new TodoChange();
  @Input()
  modelMeta: any = TodoChange.meta();
  @Output()
  onClose: EventEmitter<TodoChangeModalComponent> = new EventEmitter<TodoChangeModalComponent>();
  @Output()
  onOk: EventEmitter<TodoChangeModalComponent> = new EventEmitter<TodoChangeModalComponent>();
}
