import { Routes } from '@angular/router';
import { UsersFrameComponent, translate } from 'rucken';

export const TodoUsersFrameRoutes: Routes = [
  {
    path: '',
    component: UsersFrameComponent,
    data: {
      name: 'users',
      title: translate('Users'),
      visible: true
    }
  }
];
