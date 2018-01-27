import { Component, Injector } from '@angular/core';
import { HomePageComponent } from '@rucken/web';

@Component({
  selector: 'todo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class TodoHomePageComponent extends HomePageComponent {

  afterCreate() {
    super.afterCreate();
    const readme = require('html-loader!markdown-loader!./../../../../../../README.md');
    this.readme = readme
      .replace('<h1 id="rucken-todo">rucken-todo</h1>', '')
      .replace('<h1 id="rucken-todo-django">rucken-todo-django</h1>', '');
  }
}
