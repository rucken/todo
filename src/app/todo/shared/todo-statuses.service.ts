import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { BaseRepositoryService, RepositoryHelper } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoStatus } from './models/todo-status.model';

@Injectable()
export class TodoStatusesService extends BaseRepositoryService {
  items$: Subject<TodoStatus[]>;
  items: TodoStatus[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'todo_statuses';
    this.name = 'todo_status';
    this.apiUrl = `${repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoStatus[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoStatus(item);
  }
  newCache() {
    return new TodoStatusesService(this.repositoryHelper);
  }
}
