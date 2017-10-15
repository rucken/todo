import { Routes } from '@angular/router';
import { translate } from '@rucken/core';
import { AccountPageComponent, AuthGuardService } from '@rucken/web';
import { TodoProfileFrameRoutes } from './profile-frame/profile-frame.routes';
import { TodoProfileFrameModule } from './profile-frame/profile-frame.module';

export const children = [
  {
    path: 'profile',
    data: TodoProfileFrameRoutes[0].data,
    loadChildren: './profile-frame/profile-frame.module#TodoProfileFrameModule'
  }
];
export const TodoAccountPageRoutes: Routes = [
  { path: '', redirectTo: '/account/profile', pathMatch: 'full' },
  {
    path: '',
    component: AccountPageComponent,
    data: {
      name: 'account',
      title: translate('Account'),
      visible: true,
      children: children
    },
    children: children,
    canActivate: [AuthGuardService]
  }
];
