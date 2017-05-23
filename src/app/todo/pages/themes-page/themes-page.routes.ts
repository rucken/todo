import { ThemesPageComponent, translate } from 'rucken';
export const TodoThemesPageRoutes = [{
  path: '',
  pathMatch: 'full',
  component: ThemesPageComponent,
  data: {
    name: 'themes',
    title: translate('Themes'),
    visible: true
  }
}];
