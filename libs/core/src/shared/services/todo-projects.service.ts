import { map } from 'rxjs/operators';

import { Injectable, Injector } from '@angular/core';
import { BaseRepositoryService } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoProject } from './../models/todo-project.model';

@Injectable()
export class TodoProjectsService extends BaseRepositoryService {
  items$: Subject<TodoProject[]>;
  items: TodoProject[];
  apiUrl: string;

  constructor(
    public injector: Injector
  ) {
    super(injector);
    this.pluralName = 'todo_projects';
    this.name = 'todo_project';
    this.apiUrl = `${this.repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoProject[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoProject(item);
  }
  newCache() {
    return new TodoProjectsService(this.injector);
  }
}
