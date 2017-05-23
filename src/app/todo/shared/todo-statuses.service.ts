import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { TodoStatus } from './models/todo-status.model';
import { BaseRepositoryService, RepositoryHelper } from 'rucken';
import { HttpHelper } from 'rucken';
import { EndpointHelper } from 'rucken';
@Injectable()
export class TodoStatusesService extends BaseRepositoryService {
  items$: Subject<TodoStatus[]>;
  items: TodoStatus[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'statuses';
    this.name = 'status';
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
