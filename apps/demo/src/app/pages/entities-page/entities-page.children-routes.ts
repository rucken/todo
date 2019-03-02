import { CONTENT_TYPES_FRAME_ROUTES } from './content-types-frame/content-types-frame.routes';
import { GROUPS_FRAME_ROUTES } from './groups-frame/groups-frame.routes';
import { PERMISSIONS_FRAME_ROUTES } from './permissions-frame/permissions-frame.routes';
import { PROJECTS_FRAME_ROUTES } from './projects-frame/projects-frame.routes';
import { STATUSES_FRAME_ROUTES } from './statuses-frame/statuses-frame.routes';
import { TASKS_FRAME_ROUTES } from './tasks-frame/tasks-frame.routes';
import { USERS_FRAME_ROUTES } from './users-frame/users-frame.routes';

export const ENTITIES_PAGE_CHILDREN_ROUTES = [
  { path: '', redirectTo: '/entities/content-types', pathMatch: 'full' },
  {
    path: 'content-types',
    loadChildren: './content-types-frame/content-types-frame.module#ContentTypesFrameModule',
    data: CONTENT_TYPES_FRAME_ROUTES[0].data
  },
  {
    path: 'groups',
    loadChildren: './groups-frame/groups-frame.module#GroupsFrameModule',
    data: GROUPS_FRAME_ROUTES[0].data
  },
  {
    path: 'permissions',
    loadChildren: './permissions-frame/permissions-frame.module#PermissionsFrameModule',
    data: PERMISSIONS_FRAME_ROUTES[0].data
  },
  {
    path: 'users',
    loadChildren: './users-frame/users-frame.module#UsersFrameModule',
    data: USERS_FRAME_ROUTES[0].data
  },
  {
    path: 'projects',
    loadChildren: './projects-frame/projects-frame.module#ProjectsFrameModule',
    data: PROJECTS_FRAME_ROUTES[0].data
  },
  {
    path: 'tasks',
    loadChildren: './tasks-frame/tasks-frame.module#TasksFrameModule',
    data: TASKS_FRAME_ROUTES[0].data
  },
  {
    path: 'statuses',
    loadChildren: './statuses-frame/statuses-frame.module#StatusesFrameModule',
    data: STATUSES_FRAME_ROUTES[0].data
  }
];
