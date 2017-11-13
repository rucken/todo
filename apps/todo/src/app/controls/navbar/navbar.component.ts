import { Component, Injector } from '@angular/core';
import { AuthModalComponent, ConfirmModalComponent, NavbarComponent } from '@rucken/web';

import { TodoRoutes } from './../../app.routes';

@Component({
  selector: 'todo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  entryComponents: [ConfirmModalComponent, AuthModalComponent]
})
export class TodoNavbarComponent extends NavbarComponent {

  changelog: string = require('html-loader!markdown-loader!./../../../../../../CHANGELOG.md');

  initRoutes() {
    this.childrenRoutes = TodoRoutes;
  }
}
