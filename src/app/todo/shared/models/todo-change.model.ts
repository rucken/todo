
import { BaseResourceModel, ContentType, translate, User } from 'rucken';
import { ShortTodoProject } from './short-todo-project.model';

export class TodoChange extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
    project: translate('Project'),
    contentType: translate('Content type'),
    action: translate('Action'),
    dataId: translate('Data ID'),
    data: translate('Changes'),
    user: translate('User'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),

  };
  static dateFields: any = ['createdAt', 'updatedAt'];
  static fields: any = [
    'id',
    'project',
    'contentType',
    'action',
    'dataId',
    'data',
    'user',
    'createdAt',
    'updatedAt',

  ];
  // todo: move to local use, after update rucken
  dateAsStringFormat = 'DD.MM.YYYY HH:mm';

  id: number;
  project: ShortTodoProject;
  contentType: ContentType;
  action: string;
  dataId: string;
  data: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;

  static meta() {
    const meta: any = TodoChange;
    meta.project = ShortTodoProject;
    meta.contentType = ContentType;
    meta.user = User;
    return meta;
  }
  constructor(obj?: any) {
    super(obj);
  }
  parse(obj: any) {
    this.parseByFields(obj, TodoChange.meta());
    this.project = obj.project ? new ShortTodoProject(obj.project) : null;
    this.contentType = obj.contentType ? new ContentType(obj.contentType) : null;
    this.user = obj.user ? new User(obj.user) : null;
  }
  format() {
    const result = this.formatByFields(TodoChange.meta());
    result.project = result.project ? result.project.pk : null;
    result.contentType = result.contentType ? result.contentType.pk : null;
    result.user = result.user ? result.user.pk : null;
    return result;
  }
  get projectAsString() {
    if (this.project) {
      return this.project.asString;
    } else {
      return '';
    }
  }
  get dataAsString() {
    return JSON.stringify(JSON.parse(this.data), null, 2);
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
  get contentTypeAsString() {
    if (this.contentType) {
      return this.contentType.asString;
    } else {
      return '';
    }
  }
  get userAsString() {
    if (this.user) {
      return this.user.asString;
    } else {
      return '';
    }
  }
  validate() {
    const result: any = {};
    let valid = true;
    if (this.data) {
      try {
        this.data = JSON.stringify(JSON.parse(this.data));
      } catch (error) {
        result.data = [translate('Wrong json data')];
      }
      valid = false;
    }
    if (valid === true) {
      return valid;
    }
    return result;
  }
}
