import { translate } from '@rucken/core';

import { TodoHomePageComponent } from './home-page.component';

export const TodoHomePageRoutes = [{
  path: '',
  pathMatch: 'full',
  component: TodoHomePageComponent,
  data: {
    name: 'home',
    title: translate('Home'),
    visible: true
  }
}];
