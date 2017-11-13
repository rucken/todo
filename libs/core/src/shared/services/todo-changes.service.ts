import 'rxjs/add/operator/map';

import { Injectable, Injector } from '@angular/core';
import { BaseRepositoryService } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoChange } from './../models/todo-change.model';

@Injectable()
export class TodoChangesService extends BaseRepositoryService {
  items$: Subject<TodoChange[]>;
  items: TodoChange[];
  apiUrl: string;

  constructor(
    public injector: Injector
  ) {
    super(injector);
    this.pluralName = 'todo_changes';
    this.name = 'todo_change';
    this.apiUrl = `${this.repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoChange[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoChange(item);
  }
  newCache() {
    return new TodoChangesService(this.injector);
  }
}
