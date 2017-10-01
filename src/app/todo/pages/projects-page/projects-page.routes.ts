import { translate } from '@rucken/core';

import { TodoProjectsPageComponent } from './projects-page.component';

export const TodoProjectsPageRoutes = [{
  path: '',
  pathMatch: 'full',
  component: TodoProjectsPageComponent,
  data: {
    name: 'projects',
    title: translate('Projects'),
    visible: true
  }
}];
