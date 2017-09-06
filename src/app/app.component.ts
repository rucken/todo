import { AppService, AlertModalComponent, BaseAppComponent, RuckenRuI18n, translate } from 'rucken';
import { Component, ViewContainerRef, ComponentFactoryResolver, Input, ViewEncapsulation, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { TodoRuI18n } from './todo/i18n/ru.i18n';

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
    dic: _.merge(RuckenRuI18n, TodoRuI18n)
  }, {
    code: 'en',
    title: translate('English'),
    dic: null
  }]
  pleaseWaitVisible = false;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public app: AppService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService,
    public router: Router
  ) {
    super(viewContainerRef, app, resolver, translateService);

    router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        if (window['showPleaseWait']) {
          this.pleaseWaitVisible = true;
          setTimeout(() => {
            if (!this.pleaseWaitVisible) {
              return;
            }
            window['showPleaseWait'](this.translateService.instant('Loading...'));
          }, 500);
        }
      }
      if (evt instanceof NavigationEnd) {
        this.pleaseWaitVisible = false;
        document.body.scrollTop = 0;
        if (window && window['loading_screen'] && window['loading_screen'].finish !== false) {
          window['loading_screen'].finish();
        }
      }
    });
  }
  init() {
    super.init();
    if (window && window['loading_screen'] && window['loading_screen'].finish !== false) {
      window['loading_screen'].finish();
      this.pleaseWaitVisible = false;
    }
  }
  // todo: remove after update rucken
  showContentModal(content: string, title?: string, size?: string): EventEmitter<any> {
    if (size === undefined) {
      size = 'md';
    }
    if (title === undefined) {
      title = this.translateService.instant('Info');
    }
    const alert: AlertModalComponent = this.app.modals(this.resolver).create(AlertModalComponent);
    alert.focused = false;
    alert.name = 'error';
    alert.text = title;
    alert.content = content;
    alert.messageClass = '';
    alert.size = size;
    alert.buttonClass = 'btn-primary';
    alert.buttonText = this.translateService.instant('ОК');
    alert.modal.show();
    return alert.onClose;
  }
}
