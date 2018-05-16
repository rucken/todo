import { translate } from '@rucken/core';
import { ProjectsPageComponent } from './projects-page.component';

export const ProjectsPageRoutes = [{
  path: '',
  component: ProjectsPageComponent,
  data: {
    name: 'projects',
    title: translate('Projects')
  }
}];
