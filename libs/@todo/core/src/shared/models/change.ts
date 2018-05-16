import { ContentType, User, serializeModel, transformDateToString, transformStringToDate, translate } from '@rucken/core';
import { Transform, Type } from 'class-transformer';
import { DateTime } from 'luxon';
import { IModel } from 'ngx-repository';
import { Project } from './project';

export class Change implements IModel {
  static strings: any = {
    id: translate('Id'),
    project: translate('Project'),
    contentType: translate('Content type'),
    method: translate('Method'),
    dataId: translate('Data id'),
    data: translate('Data'),
    user: translate('User'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),
    createTitle: translate('Add new change'),
    viewTitle: translate('Change #{{id}}'),
    updateTitle: translate('Update change #{{id}}'),
    deleteTitle: translate('Delete change #{{id}}'),
    deleteMessage: translate('Do you really want to delete change?')
  };

  id: number = undefined;

  @Type(serializeModel(Project))
  project: Project = undefined;

  @Type(serializeModel(ContentType))
  contentType: ContentType = undefined;

  method: string = undefined;
  dataId: string = undefined;
  data: string = undefined;

  @Type(serializeModel(User))
  user: User = undefined;

  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  createdAt: Date = undefined;

  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  updatedAt: Date = undefined;

  get dataAsString() {
    return this.data ? this.data.substring(1, 100) : '' + (this.data.length > 100 ? '...' : '');
  }
  get createdAtAsString() {
    if (this.createdAt) {
      return DateTime.fromJSDate(this.createdAt).toLocaleString();
    }
    return '';
  }
  toString() {
    return this.contentType;
  }
}
