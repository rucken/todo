import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { MetaModel, EndpointHelper, HttpHelper } from 'rucken';
import * as _ from 'lodash';
import { environment } from './../../../../environments/environment';

@Injectable()
export class TodoEndpointHelper extends EndpointHelper {
  constructor(public httpHelper: HttpHelper) {
    super(httpHelper);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  actionUrl(endpointService: any, action?: any) {
    let endpointServiceApiUrl = endpointService.apiUrl;
    if (environment.type === 'mockapi' && endpointService.name === 'account') {
      endpointServiceApiUrl += '/1';
    }
    if (action === undefined) {
      return endpointServiceApiUrl;
    } else {
      return `${endpointServiceApiUrl}/${action}`;
    }
  };
}
