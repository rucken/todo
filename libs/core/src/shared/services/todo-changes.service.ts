import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { BaseRepositoryService, RepositoryHelper } from '@rucken/core';
import { Subject } from 'rxjs/Subject';

import { TodoChange } from './../models/todo-change.model';

@Injectable()
export class TodoChangesService extends BaseRepositoryService {
  items$: Subject<TodoChange[]>;
  items: TodoChange[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'todo_changes';
    this.name = 'todo_change';
    this.apiUrl = `${repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<TodoChange[]>>new Subject();
  }
  transformModel(item: any) {
    return new TodoChange(item);
  }
  newCache() {
    return new TodoChangesService(this.repositoryHelper);
  }
}
