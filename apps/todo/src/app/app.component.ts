import { Component, ComponentFactoryResolver, Injector, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RuckenCoreRuI18n, translate } from '@rucken/core';
import { RuckenTodoCoreRuI18n } from '@rucken/todo-core';
import { RuckenTodoWebRuI18n } from '@rucken/todo-web';
import { AlertModalComponent, BaseAppComponent, RuckenWebRuI18n } from '@rucken/web';
import * as _ from 'lodash';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale, ruLocale } from 'ngx-bootstrap/locale';
import { takeUntil } from 'rxjs/operators';

import { TodoRuI18n } from './i18n/ru.i18n';

import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

defineLocale('ru', ruLocale);
defineLocale('en', enGbLocale);

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [AlertModalComponent],
  encapsulation: ViewEncapsulation.None
})
export class TodoAppComponent extends BaseAppComponent {

  languages: any = [{
    code: 'ru',
    title: translate('Russian'),
    dic: _.merge(RuckenCoreRuI18n, RuckenWebRuI18n, RuckenTodoCoreRuI18n, RuckenTodoWebRuI18n, TodoRuI18n)
  }, {
    code: 'en',
    title: translate('English'),
    dic: null
  }];

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    public injector: Injector,
    public viewContainerRef: ViewContainerRef,
    public resolver: ComponentFactoryResolver,
    public router: Router
  ) {
    super(injector, viewContainerRef, resolver);
    if (isPlatformBrowser(this.platformId)) {
      router.events.pipe(takeUntil(this.destroyed$)).subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          document.body.scrollTop = 0;
        }
      });
    }
  }
}
