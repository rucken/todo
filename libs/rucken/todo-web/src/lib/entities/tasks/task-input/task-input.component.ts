import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, IBaseEntityModalOptions, ModalsService, translate } from '@rucken/core';
import { Task, TASKS_CONFIG_TOKEN } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { TasksGridModalComponent } from '../tasks-grid-modal/tasks-grid-modal.component';
import { TasksGridComponent } from '../tasks-grid/tasks-grid.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskInputComponent extends TasksGridComponent implements OnInit {
  @Input()
  modalAppendFromGrid: IBaseEntityModalOptions = {
    component: TasksGridModalComponent,
    initialState: {
      title: translate('Select task'),
      yesTitle: translate('Select')
    }
  };
  @Output()
  select = new EventEmitter<Task>();

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(TASKS_CONFIG_TOKEN)
    protected tasksConfig: IRestProviderOptions<Task>
  ) {
    super(modalsService, errorsExtractor, translateService, dynamicRepository, tasksConfig);
  }
  ngOnInit() {
    this.mockedItems = [];
    this.useMock({
      items: this.mockedItems,
      ...this.tasksConfig
    });
    this.mockedItemsChange.subscribe(items => this.onSelect(items[0]));
  }
  onSelect(item: Task) {
    this.select.emit(item);
  }
}
