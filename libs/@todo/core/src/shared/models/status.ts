import { IModel } from 'ngx-repository';
import { translate, transformStringToDate, transformDateToString, serializeModel, transformStringToObject } from '@rucken/core';
import { Project } from './project';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class Status implements IModel {
  static strings: any = {
    id: translate('Id'),
    project: translate('Project'),
    name: translate('Name'),
    title: translate('Title'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),
    createTitle: translate('Add new status'),
    viewTitle: translate('Status #{{id}}'),
    updateTitle: translate('Update status #{{id}}'),
    deleteTitle: translate('Delete status #{{id}}'),
    deleteMessage: translate('Do you really want to delete status?')

  };

  id: number = undefined;
  @IsNotEmpty()
  name: string = undefined;
  title: string = undefined;
  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  createdAt: Date = undefined;
  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  updatedAt: Date = undefined;

  toString() {
    return this.title;
  }
}
