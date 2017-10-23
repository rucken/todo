import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { BaseRepositoryService, RepositoryHelper } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoTask } from './../models/todo-task.model';

@Injectable()
export class TodoTasksService extends BaseRepositoryService {
  items$: Subject<TodoTask[]>;
  items: TodoTask[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'todo_tasks';
    this.name = 'todo_task';
    this.apiUrl = `${repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoTask[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoTask(item);
  }
  newCache() {
    return new TodoTasksService(this.repositoryHelper);
  }
}
