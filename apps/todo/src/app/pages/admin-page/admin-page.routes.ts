import { Routes } from '@angular/router';
import { translate } from '@rucken/core';
import { AdminPageComponent, AuthGuardService } from '@rucken/web';

import { TodoGroupsFrameRoutes } from './groups-frame/groups-frame.routes';
import { TodoUsersFrameRoutes } from './users-frame/users-frame.routes';

export const children = [
  {
    path: 'users',
    loadChildren: './users-frame/users-frame.module#TodoUsersFrameModule',
    data: TodoUsersFrameRoutes[0].data,
    canActivate: [AuthGuardService]
  },
  {
    path: 'groups',
    loadChildren: './groups-frame/groups-frame.module#TodoGroupsFrameModule',
    data: TodoGroupsFrameRoutes[0].data,
    canActivate: [AuthGuardService]
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
    children: children,
    canActivate: [AuthGuardService]
  }
];
