import { Component, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AdminPageComponent, AppService, AuthModalComponent, NavbarComponent,
  AccountService, User, ConfirmModalComponent
} from 'rucken';
import { TranslateService } from '@ngx-translate/core';
import { TodoRoutes } from '../../../app.routes';
import * as _ from 'lodash';

@Component({
  selector: 'todo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  entryComponents: [ConfirmModalComponent, AuthModalComponent]
})
export class TodoNavbarComponent extends NavbarComponent {

  changelog: string = require('html-loader!markdown-loader!./../../../../../CHANGELOG.md');

  private _childrenRoutes: any[] = [];

  constructor(
    public accountService: AccountService,
    public app: AppService,
    public translateService: TranslateService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public resolver: ComponentFactoryResolver
  ) {
    super(accountService, app, translateService, activatedRoute, router, resolver);
  }
  init() {
    super.init();
    this.childrenRoutes = TodoRoutes;
  }
  set childrenRoutes(routes: any[]) {
    this._childrenRoutes = routes;
  }
  get childrenRoutes() {
    const items: any[] = this._childrenRoutes.filter(
      item =>
        item.data &&
        item.data.visible &&
        this.account &&
        this.account.checkPermissions([`read_${item.data.name}-page`])
    ).map(
      item => {
        const newItem = item.data;
        newItem.url = `/${newItem.name}`;
        return newItem;
      });
    return items;
  }
}
