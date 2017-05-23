import { Routes } from '@angular/router';
import { ProfileFrameComponent, translate } from 'rucken';

export const TodoProfileFrameRoutes: Routes = [
  {
    path: '',
    component: ProfileFrameComponent,
    data: {
      name: 'profile',
      title: translate('Profile'),
      visible: true
    }
  }
];
