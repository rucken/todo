import { translate } from '@rucken/core';
import { ThemesPageComponent } from '@rucken/web';

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
