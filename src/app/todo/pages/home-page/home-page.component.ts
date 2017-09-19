import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, SharedService } from 'rucken';
import { AppService } from 'rucken';
import { BasePageComponent } from 'rucken';

@Component({
  selector: 'todo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class TodoHomePageComponent extends BasePageComponent {

  readme: string = require('html-loader!markdown-loader!./../../../../../README.md');

  constructor(
    public accountService: AccountService,
    public app: AppService,
    public translateService: TranslateService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public sharedService: SharedService
  ) {
    super(accountService, app, translateService, activatedRoute, router, sharedService);
  }
}
