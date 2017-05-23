import { BaseResourceModel, translate, User } from 'rucken';

export class TodoProject extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
    title: translate('Title'),
    description: translate('Description'),
    isPublic: translate('Is public'),
    users: translate('Users'),
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
    'createdAt',
    'updatedAt',
  ];

  className = 'TodoProject';

  id: number;
  title: string;
  description: string;
  isPublic: boolean;
  users: User[];
  createdAt: Date;
  updatedAt: Date;

  static meta() {
    const meta: any = TodoProject;
    meta.user = User;
    return meta;
  }
  constructor(obj?: any) {
    super(obj);
  }
  parse(obj: any) {
    this.parseByFields(obj, TodoProject.meta());
    this.users = obj.users ? obj.users.map(user => new User(user)) : [];
  }
  format() {
    const result = this.formatByFields(TodoProject.meta());
    result.users = result.users ? result.users.map(user => user.format()) : [];
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
}
