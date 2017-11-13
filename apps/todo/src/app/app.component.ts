import 'rxjs/add/operator/takeUntil';

import { Component, ComponentFactoryResolver, Injector, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RuckenCoreRuI18n, translate } from '@rucken/core';
import { RuckenTodoCoreRuI18n } from '@rucken/todo-core';
import { RuckenTodoWebRuI18n } from '@rucken/todo-web';
import { AlertModalComponent, BaseAppComponent, RuckenWebRuI18n } from '@rucken/web';
import * as _ from 'lodash';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { enGb, ru } from 'ngx-bootstrap/locale';

import { RuckenTodoRuI18n } from './i18n/ru.i18n';

defineLocale('ru', ru);
defineLocale('en', enGb);

@Component({
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [AlertModalComponent],
  encapsulation: ViewEncapsulation.None
})
export class TodoAppComponent extends BaseAppComponent {

  languages = [{
    code: 'ru',
    title: translate('Russian'),
    dic: _.merge(RuckenCoreRuI18n, RuckenWebRuI18n, RuckenTodoCoreRuI18n, RuckenTodoWebRuI18n, RuckenTodoRuI18n)
  }, {
    code: 'en',
    title: translate('English'),
    dic: null
  }];

  constructor(
    public injector: Injector,
    public viewContainerRef: ViewContainerRef,
    public resolver: ComponentFactoryResolver,
    public router: Router
  ) {
    super(injector, viewContainerRef, resolver);
    router.events.takeUntil(this.destroyed$).subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        document.body.scrollTop = 0;
      }
    });
  }
  init() {
    super.init();
    if (window && window['loading_screen'] && window['loading_screen'].finish !== false) {
      window['loading_screen'].finish();
    }
  }
}
