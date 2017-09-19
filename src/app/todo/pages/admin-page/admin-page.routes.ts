import { Routes } from '@angular/router';
import { AdminPageComponent, translate } from 'rucken';
import { TodoGroupsFrameRoutes } from './groups-frame/groups-frame.routes';
import { TodoUsersFrameRoutes } from './users-frame/users-frame.routes';
import { TodoUsersFrameModule } from './users-frame/users-frame.module';
import { TodoGroupsFrameModule } from './groups-frame/groups-frame.module';

export const children = [
  {
    path: 'users',
    loadChildren: './users-frame/users-frame.module#TodoUsersFrameModule',
    data: TodoUsersFrameRoutes[0].data
  },
  {
    path: 'groups',
    loadChildren: './groups-frame/groups-frame.module#TodoGroupsFrameModule',
    data: TodoGroupsFrameRoutes[0].data
  }
];
export const TodoAdminPageRoutes: Routes = [
  { path: '', redirectTo: '/admin/users', pathMatch: 'full' },
  {
    path: '',
    component: AdminPageComponent,
    data: {
      name: 'admin',
      title: translate('Admin'),
      visible: true,
      children: children
    },
    children: children
  }
];
