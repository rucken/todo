import { map} from 'rxjs/operators';

import { Injectable, Injector } from '@angular/core';
import { BaseRepositoryService } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoStatus } from './../models/todo-status.model';

@Injectable()
export class TodoStatusesService extends BaseRepositoryService {
  items$: Subject<TodoStatus[]>;
  items: TodoStatus[];
  apiUrl: string;

  constructor(
    public injector: Injector
  ) {
    super(injector);
    this.pluralName = 'todo_statuses';
    this.name = 'todo_status';
    this.apiUrl = `${this.repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoStatus[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoStatus(item);
  }
  newCache() {
    return new TodoStatusesService(this.injector);
  }
}
