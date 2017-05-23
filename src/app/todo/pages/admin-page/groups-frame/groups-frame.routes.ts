import { Routes } from '@angular/router';
import { GroupsFrameComponent, translate } from 'rucken';

export const TodoGroupsFrameRoutes: Routes = [
  {
    path: '',
    component: GroupsFrameComponent,
    data: {
      name: 'groups',
      title: translate('Groups'),
      visible: true
    }
  }
];
