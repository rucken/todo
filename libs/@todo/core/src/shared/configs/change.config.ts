import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { IRestProviderOptions, PaginationMeta, ProviderActionEnum } from 'ngx-repository';
import { Change } from '../models/change';

@Injectable()
export class ChangesConfig implements IRestProviderOptions<Change> {
  name = 'change';
  pluralName = 'changes';
  autoload = true;
  paginationMeta = {
    perPage: 5
  };
  actionOptions = {
    responseData: (data: any, action: ProviderActionEnum) => {
      if (action === ProviderActionEnum.Delete) {
        return true;
      } else {
        if (action === ProviderActionEnum.LoadAll) {
          return plainToClass(Change, data.body.changes);
        } else {
          return plainToClass(Change, data.body.change);
        }
      }
    },
    responsePaginationMeta: (data: any, action: ProviderActionEnum): PaginationMeta => {
      return { totalResults: data.body.meta.totalResults, perPage: undefined };
    }
  };
  restOptions = {
    limitQueryParam: 'per_page',
    pageQueryParam: 'cur_page',
    searchTextQueryParam: 'q'
  };
  constructor() { }
}
