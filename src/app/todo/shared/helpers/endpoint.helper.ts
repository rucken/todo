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
  actionUrl(endpointService: any, action: any, data: any, customUrl?: string) {
    let url: string = endpointService.apiUrl;
    if (environment.type === 'mockapi' && endpointService.name === 'account') {
      url += '/1';
    }
    if (customUrl) {
      url = customUrl;
    }
    if (action !== undefined && action !== null) {
      url = `${url}/${action}`;
    }
    if (data) {
      let key: string;
      for (key in data) {
        if (data.hasOwnProperty(key)) {
          url = url.replace(new RegExp(`{${key}}`, 'ig'), data[key]);
        }
      }
    }
    return url;
  }
}
