import { translate } from '@rucken/core';
import { HomeGuardService } from '@rucken/web';

import { TodoHomePageComponent } from './home-page.component';

export const TodoHomePageRoutes = [{
  path: '',
  pathMatch: 'full',
  component: TodoHomePageComponent,
  data: {
    name: 'home',
    title: translate('Home'),
    visible: true
  },
  canActivate: [HomeGuardService]
}];
