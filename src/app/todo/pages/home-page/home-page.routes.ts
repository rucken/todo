import { TodoHomePageComponent } from './home-page.component';
import { translate } from 'rucken';
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
