import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, ResouceEnumStatus, translate } from 'rucken';
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
    public router: Router
  ) {
    super(accountService, app, translateService, activatedRoute, router);
  }
  init() {
    super.init();
    this.todoProjectsGrid.cachedResourcesService.changeStatusList$.subscribe(
      (status: ResouceEnumStatus) => {
        if (status === ResouceEnumStatus.Loading) {
          this.todoTasksGrid.cachedResourcesService.setStatusList(ResouceEnumStatus.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoTasksGrid.cachedResourcesService.changeStatusList$.subscribe(
      (status: ResouceEnumStatus) => {
        if (status === ResouceEnumStatus.Loading) {
          this.todoChangesGrid.cachedResourcesService.setStatusList(ResouceEnumStatus.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoProjectsGrid.cachedResourcesService.changeStatusItem$.subscribe(
      (status: ResouceEnumStatus) => {
        if (status === ResouceEnumStatus.Ok) {
          this.todoTasksGrid.cachedResourcesService.setStatusList(ResouceEnumStatus.Loading,
            translate('Loading...')
          );
        }
      }
    );
    this.todoTasksGrid.cachedResourcesService.changeStatusItem$.subscribe(
      (status: ResouceEnumStatus) => {
        if (status === ResouceEnumStatus.Ok) {
          this.todoChangesGrid.cachedResourcesService.setStatusList(ResouceEnumStatus.Loading,
            translate('Loading...')
          );
        }
      }
    );
  }
  onSelectProjects(projects: any[] | TodoProject[]) {
    this.todoTasksGrid.project = projects && projects[0] ? projects[0] : new TodoProject(-1);
    this.todoTasksGrid.search();
    this.todoChangesGrid.task = null;
    this.todoChangesGrid.search();
  }
  onSelectTasks(tasks: any[] | TodoTask[]) {
    this.todoChangesGrid.project = this.todoTasksGrid.project;
    this.todoChangesGrid.task = tasks && tasks[0] ? tasks[0] : new TodoTask(-1);
    this.todoChangesGrid.search();
  }
}
