import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  AccountService,
  AppService,
  EndpointHelper,
  HttpHelper,
  RepositoryHelper,
  RuckenCoreServices,
  ThemesService,
} from '@rucken/core';
import { RuckenTodoCoreServices } from '@rucken/todo-core';
import {
  AlertModalModule,
  AuthHttpFactory,
  AuthModalModule,
  BaseResourceSelectInputConfig,
  RuckenWebServices,
  SelectInputConfig,
  TableColumnConfig,
  TextInputConfig,
  WebAccountService,
  WebAppService,
  WebThemesService,
} from '@rucken/web';
import { HomeGuardService, SharedModule } from '@rucken/web';
import { AuthHttp } from 'angular2-jwt';
import { LaddaModule } from 'angular2-ladda';
import {
  ComponentLoaderFactory,
  PaginationConfig,
  PopoverConfig,
  PositioningService,
  TabsetConfig,
  TooltipConfig,
} from 'ngx-bootstrap';

import { TodoAppComponent } from './app.component';
import { TodoRoutes } from './app.routes';
import { TodoNavbarModule } from './controls/navbar/navbar.module';
import { TodoHomeGuardService } from './shared/guards/home-guard.service';
import { TodoEndpointHelper } from './shared/helpers/endpoint.helper';
import { TodoHttpHelper } from './shared/helpers/http.helper';

@NgModule({
  declarations: [
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LaddaModule.forRoot({
      style: 'expand-left',
      spinnerColor: 'white',
      spinnerLines: 12
    }),
    AlertModalModule.forRoot(),
    TodoNavbarModule.forRoot(),
    AuthModalModule.forRoot(),
    TranslateModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot(TodoRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ComponentLoaderFactory,
    PositioningService,
    TooltipConfig,
    PaginationConfig,
    TabsetConfig,
    PopoverConfig,
    RuckenCoreServices,
    RuckenWebServices,
    RuckenTodoCoreServices,
    BaseResourceSelectInputConfig,
    TextInputConfig,
    SelectInputConfig,
    TableColumnConfig,
    { provide: ThemesService, useClass: WebThemesService },
    { provide: AppService, useClass: WebAppService },
    { provide: AccountService, useClass: WebAccountService },
    { provide: AuthHttp, useFactory: AuthHttpFactory.create, deps: [Http, RequestOptions] },
    { provide: RepositoryHelper, useClass: RepositoryHelper },
    { provide: EndpointHelper, useClass: TodoEndpointHelper },
    { provide: HttpHelper, useClass: TodoHttpHelper },
    { provide: HomeGuardService, useClass: TodoHomeGuardService }
  ],
  bootstrap: [TodoAppComponent]
})
export class TodoAppModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: TodoAppModule };
  }
}
