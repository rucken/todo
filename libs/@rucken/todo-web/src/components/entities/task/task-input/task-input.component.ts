import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { Task, TasksConfig } from '@rucken/todo-core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { TasksGridModalComponent } from '../tasks-grid-modal/tasks-grid-modal.component';
import { TasksGridComponent } from '../tasks-grid/tasks-grid.component';
import { MessageModalService } from '@rucken/web';


@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html'
})
export class TaskInputComponent extends TasksGridComponent implements OnInit {

  @Output()
  select = new EventEmitter<Task>();

  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected tasksConfig: TasksConfig,
    protected messageModalService: MessageModalService
  ) {
    super(
      modalService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      tasksConfig,
      messageModalService
    );
  }
  ngOnInit() {
    this.mockedItems = [];
    this.repository.useMock({
      items: this.mockedItems,
      ...this.tasksConfig
    });
    this.mockedItemsChange.subscribe(items =>
      this.onSelect(items[0])
    );
  }
  createAppendFromGridModal(): BsModalRef {
    return this.modalService.show(TasksGridModalComponent, {
      class: 'modal-md',
      initialState: {
        title: translate('Select task'),
        yesTitle: translate('Select'),
        apiUrl: this.apiUrl
      }
    });
  }
  onSelect(item: Task) {
    this.select.emit(item);
  }
}
