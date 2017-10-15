import { Component, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, AppService } from '@rucken/core';
import { AuthModalComponent, ConfirmModalComponent, NavbarComponent, SharedService } from '@rucken/web';

import { TodoRoutes } from './../../app.routes';

@Component({
  selector: 'todo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  entryComponents: [ConfirmModalComponent, AuthModalComponent]
})
export class TodoNavbarComponent extends NavbarComponent {

  changelog: string = require('html-loader!markdown-loader!./../../../../../../CHANGELOG.md');

  constructor(
    public accountService: AccountService,
    public app: AppService,
    public translateService: TranslateService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public resolver: ComponentFactoryResolver,
    public sharedService: SharedService
  ) {
    super(accountService, app, translateService, activatedRoute, router, resolver, sharedService);
  }
  init() {
    super.init();
    this.childrenRoutes = TodoRoutes;
  }
}
