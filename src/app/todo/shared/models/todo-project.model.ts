import { BaseResourceModel, translate, User } from 'rucken';
import { TodoStatus } from './todo-status.model';

export class TodoProject extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
    title: translate('Title'),
    description: translate('Description'),
    isPublic: translate('Is public'),
    users: translate('Users'),
    statuses: translate('Todo statuses'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),

  };
  static dateFields: any = ['createdAt', 'updatedAt'];
  static fields: any = [
    'id',
    'title',
    'description',
    'isPublic',
    'users',
    'statuses',
    'createdAt',
    'updatedAt',
  ];

  id: number;
  title: string;
  description: string;
  isPublic: boolean;
  users: User[];
  statuses: TodoStatus[];
  createdAt: Date;
  updatedAt: Date;

  static meta() {
    const meta: any = TodoProject;
    meta.user = User;
    meta.todoStatus = TodoStatus;
    return meta;
  }
  constructor(obj?: any) {
    super(obj);
  }
  parse(obj: any) {
    this.parseByFields(obj, TodoProject.meta());
    this.users = obj.users ? obj.users.map((user: any) => new User(user)) : [];
    this.statuses = obj.statuses ? obj.statuses.map((status: any) => new TodoStatus(status)) : [];
  }
  format() {
    const result = this.formatByFields(TodoProject.meta());
    result.users = result.users ? result.users.map((user: User) => user.format()) : [];
    result.statuses = result.statuses ? result.statuses.map((status: TodoStatus) => status.format()) : [];
    return result;
  }
  get isPublicAsString() {
    return this.booleanAsString(this.isPublic);
  }
  get asString() {
    return this.title;
  }
  get usersAsString() {
    if (this.users && this.users.length > 0) {
      return this.users.map(user => user.asString).join(', ');
    } else {
      return '';
    }
  }
  get todoStatusesAsString() {
    if (this.statuses && this.statuses.length > 0) {
      return this.statuses.map(status => status.asString).join(', ');
    } else {
      return '';
    }
  }
}
