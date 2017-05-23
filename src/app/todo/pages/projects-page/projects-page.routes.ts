import { TodoProjectsPageComponent } from './projects-page.component';
import { translate } from 'rucken';
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
