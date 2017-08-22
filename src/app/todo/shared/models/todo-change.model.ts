
import { BaseResourceModel, translate } from 'rucken';
import { TodoTask } from './todo-task.model';
import { TodoProject } from './todo-project.model';

export class TodoChange extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
    project: translate('Project'),
    task: translate('Task'),
    objectType: translate('Object type'),
    oldData: translate('Old data'),
    newData: translate('New data'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),

  };
  static dateFields: any = ['createdAt', 'updatedAt'];
  static fields: any = [
    'id',
    'project',
    'task',
    'oldData',
    'newData',
    'createdAt',
    'updatedAt',

  ];

  id: number;
  project: TodoProject;
  task: TodoTask;
  oldData: string;
  newData: string;
  createdAt: Date;
  updatedAt: Date;

  static meta() {
    const meta: any = TodoChange;
    meta.project = TodoProject;
    meta.task = TodoTask;
    return meta;
  }
  constructor(obj?: any) {
    super(obj);
  }
  parse(obj: any) {
    this.parseByFields(obj, TodoChange.meta());
    this.project = obj.project ? new TodoProject(obj.project) : null;
    this.task = obj.task ? new TodoTask(obj.task) : null;
  }
  format() {
    const result = this.formatByFields(TodoChange.meta());
    result.project = result.project ? result.project.format() : null;
    result.task = result.task ? result.task.format() : null;
    return result;
  }
  get objectType() {
    if (this.task !== null) {
      return translate('Task')
    }
    if (this.project !== null) {
      return translate('Project')
    }
  }
  get createdAtInput() {
    return this.getDateInput('createdAt');
  }
  set createdAtInput(text: string) {
    this.setDateInput('createdAt', text);
  }
  get createdAtAsString() {
    return this.dateAsString('createdAt');
  }
}
