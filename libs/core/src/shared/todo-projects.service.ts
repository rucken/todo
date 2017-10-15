import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { BaseRepositoryService, RepositoryHelper } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoProject } from './models/todo-project.model';

@Injectable()
export class TodoProjectsService extends BaseRepositoryService {
  items$: Subject<TodoProject[]>;
  items: TodoProject[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'todo_projects';
    this.name = 'todo_project';
    this.apiUrl = `${repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoProject[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoProject(item);
  }
  newCache() {
    return new TodoProjectsService(this.repositoryHelper);
  }
}
