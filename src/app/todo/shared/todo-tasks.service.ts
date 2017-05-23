import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { TodoTask } from './models/todo-task.model';
import { BaseRepositoryService, RepositoryHelper } from 'rucken';
import { HttpHelper } from 'rucken';
import { EndpointHelper } from 'rucken';
@Injectable()
export class TodoTasksService extends BaseRepositoryService {
  items$: Subject<TodoTask[]>;
  items: TodoTask[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'tasks';
    this.name = 'task';
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
