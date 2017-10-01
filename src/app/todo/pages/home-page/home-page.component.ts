import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, SharedService } from '@rucken/core';
import { AppService } from '@rucken/core';
import { BasePageComponent } from '@rucken/web';

@Component({
  selector: 'todo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class TodoHomePageComponent extends BasePageComponent {

  constructor(
    public accountService: AccountService,
    public app: AppService,
    public translateService: TranslateService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public sharedService: SharedService
  ) {
    super(accountService, app, translateService, activatedRoute, router, sharedService);
    const readme = require('html-loader!markdown-loader!./../../../../../README.md');
    this.readme = readme.replace('<h1 id="rucken">rucken-todo</h1>', '');
  }
}
