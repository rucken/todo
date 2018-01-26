import { BaseResourceModel, translate } from '@rucken/core';

import { ShortTodoProject } from './short-todo-project.model';
import { TodoStatus } from './todo-status.model';

export class TodoTask extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
    project: translate('Project'),
    title: translate('Title'),
    description: translate('Description'),
    status: translate('Status'),
    openAt: translate('Open at'),
    closeAt: translate('Close at'),
    dateRange: translate('Date range'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),

  };
  static dateFields: any = ['createdAt', 'updatedAt', 'openAt', 'closeAt'];
  static fields: any = [
    'id',
    'project',
    'title',
    'description',
    'status',
    'openAt',
    'closeAt',
    'createdAt',
    'updatedAt',
  ];

  id: number;
  project?: ShortTodoProject;
  title: string;
  description: string;
  status?: TodoStatus;
  openAt: Date;
  closeAt: Date;
  createdAt: Date;
  updatedAt: Date;

  static meta() {
    const meta: any = TodoTask;
    meta.status = TodoStatus;
    meta.project = ShortTodoProject;
    return meta;
  }

  constructor(obj?: any) {
    super(obj);
  }
  parse(obj: any) {
    this.parseByFields(obj, TodoTask.meta());
    this.status = obj.status ? new TodoStatus(obj.status) : undefined;
    this.project = obj.project ? new ShortTodoProject(obj.project) : undefined;
  }
  format() {
    const result = this.formatByFields(TodoTask.meta());
    result.status = result.status ? result.status.pk : null;
    result.project = result.project ? result.project.pk : null;
    return result;
  }
  get dateRangeAsString() {
    const arr: string[] = [];
    if (this.openAtAsString) {
      arr.push(this.openAtAsString);
    }
    arr.push(' - ');
    if (this.closeAtAsString) {
      arr.push(this.closeAtAsString);
    }
    return arr.join('');
  }
  get asString() {
    return this.pk;
  }
  get projectAsString() {
    if (this.project) {
      return this.project.asString;
    } else {
      return '';
    }
  }
  get statusAsString() {
    if (this.status) {
      return this.status.asString;
    } else {
      return '';
    }
  }
  get openAtInput() {
    return this.getDateInput('openAt');
  }
  set openAtInput(text: string) {
    this.setDateInput('openAt', text);
  }
  get openAtAsString() {
    return this.dateAsString('openAt');
  }
  get closeAtInput() {
    if (!this.closeAt) {
      return '';
    }
    return this.getDateInput('closeAt');
  }
  set closeAtInput(text: string) {
    this.setDateInput('closeAt', text);
  }
  get closeAtAsString() {
    return this.dateAsString('closeAt');
  }
}
