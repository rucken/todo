import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '@rucken/core';
import { Project, Task } from '@todo/core';
import { ChangesGridComponent, ProjectsGridComponent, TasksGridComponent } from '@todo/web';
import { plainToClass } from 'class-transformer';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UserPermPipe } from '@rucken/web';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent implements OnInit, OnDestroy {

  @ViewChild('projectsGrid')
  projectsGrid: ProjectsGridComponent;
  @ViewChild('tasksGrid')
  tasksGrid: TasksGridComponent;
  @ViewChild('changesGrid')
  changesGrid: ChangesGridComponent;

  apiUrl = environment.apiUrl;

  private _destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public activatedRoute: ActivatedRoute,
    private _userPermPipe: UserPermPipe,
    private _accountService: AccountService
  ) {
  }
  ngOnInit() {
    this._accountService.current$.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(_ => {
      if (this.projectsGrid) {
        this.projectsGrid.onChangeFilter({});
      }
    });
    this.projectsGrid.repository.items$.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(items => {
      if (items.length === 0) {
        this.onSelectProjects();
      }
    });
  }
  ngOnDestroy() {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }
  onSelectProjects(projects?: Project[]) {
    const project = projects && projects[0] ? projects[0] : undefined;
    if (!project) {
      this.tasksGrid.readonly = true;
      this.tasksGrid.project = undefined;
      this.tasksGrid.onChangeFilter();
      this.changesGrid.readonly = true;
      this.changesGrid.project = undefined;
      this.changesGrid.onChangeFilter();
    } else {
      this.tasksGrid.readonly = !this._userPermPipe.transform(project);
      if (this.tasksGrid.project !== project) {
        this.tasksGrid.project = project;
        this.tasksGrid.onChangeFilter();
      }
      this.changesGrid.readonly = !this._userPermPipe.transform(project);
      if (this.changesGrid.project !== project) {
        this.changesGrid.project = project;
        this.changesGrid.onChangeFilter();
      }
    }
  }
}
