import { BaseResourceModel, translate } from '@rucken/core';

export class ShortTodoProject extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
    title: translate('Title'),
    description: translate('Description'),
    isPublic: translate('Is public'),
    createdAt: translate('Created at'),
    updatedAt: translate('Updated at'),

  };
  static dateFields: any = ['createdAt', 'updatedAt'];
  static fields: any = [
    'id',
    'title',
    'description',
    'isPublic',
    'createdAt',
    'updatedAt',
  ];

  id: number;
  title: string;
  description: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;

  static meta() {
    const meta: any = ShortTodoProject;
    return meta;
  }
  constructor(obj?: any) {
    super(obj);
  }
  parse(obj: any) {
    this.parseByFields(obj, ShortTodoProject.meta());
  }
  format() {
    const result = this.formatByFields(ShortTodoProject.meta());
    return result;
  }
  get isPublicAsString() {
    return this.booleanAsString(this.isPublic);
  }
  get asString() {
    return this.title;
  }
}
