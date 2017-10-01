import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { <%=grid.name.camel%> } from './models/<%=grid.name.kebab%>.model';
import { BaseRepositoryService, RepositoryHelper } from '@rucken/core';
import { HttpHelper } from '@rucken/core';
import { EndpointHelper } from '@rucken/core';
@Injectable()
export class <%=grid.list.name.camel%>Service extends BaseRepositoryService {
  items$: Subject<<%=grid.name.camel%>[]>;
  items: <%=grid.name.camel%>[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = '<%=grid.list.name.snake%>';
    this.name = '<%=grid.name.snake%>';
    this.apiUrl = `${repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<<%=grid.name.camel%>[]>>new Subject();
  }
  transformModel(item: any) {
    return new <%=grid.name.camel%>(item);
  }
  newCache() {
    return new <%=grid.list.name.camel%>Service(this.repositoryHelper);
  }
}
