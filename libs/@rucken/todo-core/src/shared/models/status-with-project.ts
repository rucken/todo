import { IModel } from 'ngx-repository';
import { translate, transformStringToDate, transformDateToString, serializeModel, transformStringToObject } from '@rucken/core';
import { Project } from './project';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Status } from './status';

export class StatusWithProject extends Status {
  static strings: any = {
    ...Status.strings,
    project: translate('Project')
  };
  @Type(serializeModel(Project))
  @Transform(transformStringToObject, { toPlainOnly: true })
  project: Project = undefined;
}
