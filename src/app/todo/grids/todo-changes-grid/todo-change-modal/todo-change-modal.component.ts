import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap';

import {
    TodoProjectSelectInputComponent,
} from '../../todo-projects-grid/todo-project-select-input/todo-project-select-input.component';
import { TodoChange } from './../../../shared/models/todo-change.model';

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
