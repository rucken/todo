import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import {
  AppService,
  EndpointHelper,
  HttpHelper,
  RepositoryHelper,
  RuckenCoreServices,
  ThemesService,
  TokenService,
} from '@rucken/core';
import { RuckenTodoCoreServices } from '@rucken/todo-core';
import {
  AlertModalModule,
  AuthModalModule,
  BaseResourceSelectInputConfig,
  RuckenWebServices,
  SelectInputConfig,
  TableColumnConfig,
  TextInputConfig,
  WebAppService,
  WebThemesService,
  WebTokenService,
} from '@rucken/web';
import { HomeGuardService, SharedModule } from '@rucken/web';
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
    HttpClientModule,
    LaddaModule.forRoot({
      style: 'expand-left',
      spinnerColor: 'white',
      spinnerLines: 12
    }),
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
    }),
    SharedModule.forRoot(),
    AlertModalModule.forRoot(),
    TodoNavbarModule.forRoot(),
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
    { provide: TokenService, useClass: WebTokenService },
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
