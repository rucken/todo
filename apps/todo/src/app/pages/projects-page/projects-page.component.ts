import 'rxjs/add/operator/takeUntil';

import { Component, Injector, ViewChild } from '@angular/core';
import { EndpointStatusEnum, translate } from '@rucken/core';
import { TodoTask } from '@rucken/todo-core';
import { TodoProject } from '@rucken/todo-core';
import { TodoProjectsGridComponent } from '@rucken/todo-web';
import { TodoTasksGridComponent } from '@rucken/todo-web';
import { TodoChangesGridComponent } from '@rucken/todo-web';
import { BasePageComponent } from '@rucken/web';

@Component({
  selector: 'todo-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class TodoProjectsPageComponent extends BasePageComponent {

  @ViewChild('todoProjectsGrid')
  todoProjectsGrid: TodoProjectsGridComponent;
  @ViewChild('todoTasksGrid')
  todoTasksGrid: TodoTasksGridComponent;
  @ViewChild('todoChangesGrid')
  todoChangesGrid: TodoChangesGridComponent;

  init() {
    super.init();
    this.todoProjectsGrid.cachedResourcesService.changeStatusList$.takeUntil(this.destroyed$).subscribe(
      (status: EndpointStatusEnum) => {
        if (status === EndpointStatusEnum.Loading) {
          this.todoTasksGrid.cachedResourcesService.setStatusList(EndpointStatusEnum.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoTasksGrid.cachedResourcesService.changeStatusList$.takeUntil(this.destroyed$).subscribe(
      (status: EndpointStatusEnum) => {
        if (status === EndpointStatusEnum.Loading) {
          this.todoChangesGrid.cachedResourcesService.setStatusList(EndpointStatusEnum.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoProjectsGrid.cachedResourcesService.changeStatusItem$.takeUntil(this.destroyed$).subscribe(
      (status: EndpointStatusEnum) => {
        if (status === EndpointStatusEnum.Ok) {
          this.todoTasksGrid.cachedResourcesService.setStatusList(EndpointStatusEnum.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoTasksGrid.cachedResourcesService.changeStatusItem$.takeUntil(this.destroyed$).subscribe(
      (status: EndpointStatusEnum) => {
        if (status === EndpointStatusEnum.Ok) {
          this.todoChangesGrid.cachedResourcesService.setStatusList(EndpointStatusEnum.Loading,
            translate('Loading...')
          );
        }
      }
    );
  }
  onSelectProjects(projects: TodoProject[]) {
    this.todoTasksGrid.project = projects && projects[0] ? projects[0] : new TodoProject(-1);
    this.todoTasksGrid.search();
    this.todoChangesGrid.project = this.todoTasksGrid.project;
    this.todoChangesGrid.search();
  }
  onSelectTasks(tasks: TodoTask[]) {
    this.todoChangesGrid.project = this.todoTasksGrid.project;
    this.todoChangesGrid.search();
  }
}
