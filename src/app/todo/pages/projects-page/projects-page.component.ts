import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, EndpointStatusEnum, translate, SharedService } from 'rucken';
import { AppService } from 'rucken';
import { BasePageComponent } from 'rucken';
import { TodoProjectsGridComponent } from '../../grids/todo-projects-grid/todo-projects-grid.component';
import { TodoTasksGridComponent } from '../../grids/todo-tasks-grid/todo-tasks-grid.component';
import { TodoChangesGridComponent } from '../../grids/todo-changes-grid/todo-changes-grid.component';
import { TodoProject } from '../../shared/models/todo-project.model';
import { TodoTask } from '../../shared/models/todo-task.model';

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
