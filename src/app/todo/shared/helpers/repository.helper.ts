import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { MetaModel, EndpointHelper, RepositoryHelper, HttpHelper } from 'rucken';
import * as _ from 'lodash';
import { environment } from '../../../../environments/environment';

@Injectable()
export class TodoRepositoryHelper extends RepositoryHelper {
  constructor(public httpHelper: HttpHelper) {
    super(httpHelper);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  itemsResponse(BaseRepositoryService: any, response: any) {
    let data: any;
    if (response.json && _.isFunction(response.json)) {
      data = response.json();
    } else {
      data = response;
    }
    if (data[_.camelCase(BaseRepositoryService.pluralName)]) {
      if (data['meta']) {
        BaseRepositoryService.meta = new MetaModel(data['meta']);
      }
      return data[_.camelCase(BaseRepositoryService.pluralName)];
    } else {
      BaseRepositoryService.meta.perPage = 100;
      BaseRepositoryService.calcMeta(data.length);
      return data;
    }
  };
  itemResponse(BaseRepositoryService: any, response: any, requestData?: any) {
    let data: any;
    if (response.json && _.isFunction(response.json)) {
      data = response.json();
    } else {
      data = response;
    }
    if (data[_.camelCase(BaseRepositoryService.name)]) {
      return data[_.camelCase(BaseRepositoryService.name)];
    } else {
      return data;
    }
  };
}
