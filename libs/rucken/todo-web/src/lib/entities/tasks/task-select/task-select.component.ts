import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, ModalsService } from '@rucken/core';
import { Task, TASKS_CONFIG_TOKEN } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { TasksGridComponent } from '../tasks-grid/tasks-grid.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'task-select',
  templateUrl: './task-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskSelectComponent extends TasksGridComponent implements OnInit {
  @Input()
  searchField: FormControl = new FormControl();

  nameField = 'title';

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
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.tasksConfig,
        paginationMeta: { perPage: 1000 }
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.tasksConfig
      });
    }
  }
  checkChange(value: any, item: any) {
    return item instanceof Task;
  }
}
