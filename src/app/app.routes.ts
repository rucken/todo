import { Routes } from '@angular/router';
import { TodoHomePageRoutes } from './todo/pages/home-page/home-page.routes';
import { TodoProjectsPageRoutes } from './todo/pages/projects-page/projects-page.routes';
import { TodoThemesPageRoutes } from './todo/pages/themes-page/themes-page.routes';
import { TodoAdminPageRoutes } from './todo/pages/admin-page/admin-page.routes';
import { TodoAccountPageRoutes } from './todo/pages/account-page/account-page.routes';

export const TodoRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './todo/pages/home-page/home-page.module#HomePageModule',
    data: TodoHomePageRoutes[0].data
  },
  {
    path: 'projects',
    loadChildren: './todo/pages/projects-page/projects-page.module#ProjectsPageModule',
    data: TodoProjectsPageRoutes[0].data
  },
  {
    path: 'themes',
    loadChildren: './todo/pages/themes-page/themes-page.module#TodoThemesPageModule',
    data: TodoThemesPageRoutes[0].data
  },
  {
    path: 'admin',
    loadChildren: './todo/pages/admin-page/admin-page.module#TodoAdminPageModule',
    data: TodoAdminPageRoutes[1].data
  },
  {
    path: 'account',
    loadChildren: './todo/pages/account-page/account-page.module#TodoAccountPageModule',
    data: TodoAccountPageRoutes[1].data
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
