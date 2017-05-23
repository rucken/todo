import { BaseResourceModel, translate } from 'rucken';
import { TodoStatus } from './todo-status.model';
import { TodoProject } from './todo-project.model';

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

  className = 'TodoTask';

  id: number;
  project: TodoProject;
  title: string;
  description: string;
  status: TodoStatus;
  openAt: Date;
  closeAt: Date;
  createdAt: Date;
  updatedAt: Date;

  static meta() {
    const meta: any = TodoTask;
    meta.status = TodoStatus;
    meta.project = TodoProject;
    return meta;
  }

  constructor(obj?: any) {
    super(obj);
  }
  parse(obj: any) {
    this.parseByFields(obj, TodoTask.meta());
    this.status = obj.status ? new TodoStatus(obj.status) : null;
    this.project = obj.project ? new TodoProject(obj.project) : null;
  }
  format() {
    const result = this.formatByFields(TodoTask.meta());
    result.status = result.status ? result.status.format() : null;
    result.project = result.project ? result.project.format() : null;
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
