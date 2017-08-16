import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { TodoProject } from './models/todo-project.model';
import { BaseRepositoryService, RepositoryHelper } from 'rucken';
import { HttpHelper } from 'rucken';
import { EndpointHelper } from 'rucken';
@Injectable()
export class TodoProjectsService extends BaseRepositoryService {
  items$: Subject<TodoProject[]>;
  items: TodoProject[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'todo-projects';
    this.name = 'todo-project';
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
