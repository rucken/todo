import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, EndpointStatusEnum, translate } from '@rucken/core';
import { AppService } from '@rucken/core';
import { BasePageComponent, SharedService } from '@rucken/web';

import { TodoChangesGridComponent } from '@rucken/todo-web';
import { TodoProjectsGridComponent } from '@rucken/todo-web';
import { TodoTasksGridComponent } from '@rucken/todo-web';
import { TodoProject } from '@rucken/todo-core';
import { TodoTask } from '@rucken/todo-core';

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

  constructor(
    public accountService: AccountService,
    public app: AppService,
    public translateService: TranslateService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public sharedService: SharedService
  ) {
    super(accountService, app, translateService, activatedRoute, router, sharedService);
  }
  init() {
    super.init();
    this.todoProjectsGrid.cachedResourcesService.changeStatusList$.subscribe(
      (status: EndpointStatusEnum) => {
        if (status === EndpointStatusEnum.Loading) {
          this.todoTasksGrid.cachedResourcesService.setStatusList(EndpointStatusEnum.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoTasksGrid.cachedResourcesService.changeStatusList$.subscribe(
      (status: EndpointStatusEnum) => {
        if (status === EndpointStatusEnum.Loading) {
          this.todoChangesGrid.cachedResourcesService.setStatusList(EndpointStatusEnum.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoProjectsGrid.cachedResourcesService.changeStatusItem$.subscribe(
      (status: EndpointStatusEnum) => {
        if (status === EndpointStatusEnum.Ok) {
          this.todoTasksGrid.cachedResourcesService.setStatusList(EndpointStatusEnum.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoTasksGrid.cachedResourcesService.changeStatusItem$.subscribe(
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
