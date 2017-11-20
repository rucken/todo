import { map} from 'rxjs/operators';

import { Injectable, Injector } from '@angular/core';
import { BaseRepositoryService } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoTask } from './../models/todo-task.model';

@Injectable()
export class TodoTasksService extends BaseRepositoryService {
  items$: Subject<TodoTask[]>;
  items: TodoTask[];
  apiUrl: string;

  constructor(
    public injector: Injector
  ) {
    super(injector);
    this.pluralName = 'todo_tasks';
    this.name = 'todo_task';
    this.apiUrl = `${this.repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoTask[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoTask(item);
  }
  newCache() {
    return new TodoTasksService(this.injector);
  }
}
