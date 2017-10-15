import { translate } from '@rucken/core';
import { AuthGuardService } from '@rucken/web';

import { TodoProjectsPageComponent } from './projects-page.component';

export const TodoProjectsPageRoutes = [{
  path: '',
  pathMatch: 'full',
  component: TodoProjectsPageComponent,
  data: {
    name: 'projects',
    title: translate('Projects'),
    visible: true
  },
  canActivate: [AuthGuardService]
}];
