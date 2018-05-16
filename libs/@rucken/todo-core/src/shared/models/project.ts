import { IModel } from 'ngx-repository';
import { translate, User, transformStringToDate, transformDateToString, serializeModel } from '@rucken/core';
import { Status } from './status';
import { Transform, Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class Project implements IModel {
  static strings: any = {
    id: translate('Id'),
    title: translate('Title'),
    description: translate('Description'),
    isPublic: translate('Is public'),
    users: translate('Users'),
    statuses: translate('Statuses'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),
    createTitle: translate('Add new project'),
    viewTitle: translate('Project #{{id}}'),
    updateTitle: translate('Update project #{{id}}'),
    deleteTitle: translate('Delete project #{{id}}'),
    deleteMessage: translate('Do you really want to delete project?')

  };

  id: number = undefined;
  @IsNotEmpty()
  title: string = undefined;
  description: string = undefined;
  isPublic: boolean = undefined;
  @IsOptional()
  @Type(serializeModel(User))
  users: User[] = [];
  @IsOptional()
  @Type(serializeModel(Status))
  statuses: Status[] = [];
  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  createdAt: Date = undefined;
  @Transform(transformStringToDate, { toClassOnly: true })
  @Transform(transformDateToString, { toPlainOnly: true })
  updatedAt: Date = undefined;

  get isPublicAsString() {
    if (this.isPublic) {
      return translate('Yes');
    } else {
      return translate('No');
    }
  }
  get usersAsString() {
    return this.users.join(', ');
  }
  get statusesAsString() {
    return this.statuses.join(', ');
  }
  toString() {
    return this.title;
  }
}
