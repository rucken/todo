import { Routes } from '@angular/router';
import { AuthGuardService, HomeGuardService } from '@rucken/web';

import { TodoAccountPageRoutes } from './pages/account-page/account-page.routes';
import { TodoAdminPageRoutes } from './pages/admin-page/admin-page.routes';
import { TodoHomePageRoutes } from './pages/home-page/home-page.routes';
import { TodoProjectsPageRoutes } from './pages/projects-page/projects-page.routes';
import { TodoThemesPageRoutes } from './pages/themes-page/themes-page.routes';

export const TodoRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './pages/home-page/home-page.module#TodoHomePageModule',
    data: TodoHomePageRoutes[0].data,
    canActivate: [HomeGuardService]
  },
  {
    path: 'projects',
    loadChildren: './pages/projects-page/projects-page.module#TodoProjectsPageModule',
    data: TodoProjectsPageRoutes[0].data,
    canActivate: [AuthGuardService]
  },
  {
    path: 'themes',
    loadChildren: './pages/themes-page/themes-page.module#TodoThemesPageModule',
    data: TodoThemesPageRoutes[0].data,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: './pages/admin-page/admin-page.module#TodoAdminPageModule',
    data: TodoAdminPageRoutes[1].data,
    canActivate: [AuthGuardService]
  },
  {
    path: 'account',
    loadChildren: './pages/account-page/account-page.module#TodoAccountPageModule',
    data: TodoAccountPageRoutes[1].data,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
