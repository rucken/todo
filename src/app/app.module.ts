import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import {
  ComponentLoaderFactory, PositioningService, TooltipConfig,
  PaginationConfig, TabsetConfig, PopoverConfig
} from 'ngx-bootstrap';
import { LaddaModule } from 'angular2-ladda';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
  RuckenComponents, RuckenServices, RepositoryHelper,
  EndpointHelper, HttpHelper, AccountService, AuthHttpFactory, BaseResourceSelectInputConfig,
  TextInputConfig, SelectInputConfig, TableColumnConfig,
  TextInputModule, ModalFooterButtonsModule, AuthModalModule, AlertModalModule
} from 'rucken';
import { RouterModule } from '@angular/router';
import {
  TodoEndpointHelper, TodoHttpHelper, TodoAccountService,
  TodoRepositoryHelper, TodoNavbarModule, TodoServices
} from './todo';
import { TodoAppComponent } from './app.component';
import { TodoRoutes } from './app.routes';

@NgModule({
  declarations: [
    TodoAppComponent
  ],
  imports: [
    CommonModule,
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
    RouterModule.forRoot(TodoRoutes, { useHash: true })
  ],
  providers: [
    ComponentLoaderFactory,
    PositioningService,
    TooltipConfig,
    PaginationConfig,
    TabsetConfig,
    PopoverConfig,
    RuckenServices,
    TodoServices,
    BaseResourceSelectInputConfig,
    TextInputConfig,
    SelectInputConfig,
    TableColumnConfig,
    { provide: AuthHttp, useFactory: AuthHttpFactory.create, deps: [Http, RequestOptions] },
    { provide: RepositoryHelper, useClass: TodoRepositoryHelper },
    { provide: EndpointHelper, useClass: TodoEndpointHelper },
    { provide: HttpHelper, useClass: TodoHttpHelper },
    { provide: AccountService, useClass: TodoAccountService }
  ],
  bootstrap: [TodoAppComponent]
})
export class TodoAppModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: TodoAppModule };
  }
}
