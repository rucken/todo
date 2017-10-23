import { Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '@rucken/core';
import { AccountService } from '@rucken/core';
import { User } from '@rucken/core';
import { ShortTodoProject } from '@rucken/todo-core';
import { TodoStatus } from '@rucken/todo-core';
import { TodoStatusesService } from '@rucken/todo-core';
import { BaseResourceSelectInputConfig } from '@rucken/web';
import { BaseResourceSelectInputComponent } from '@rucken/web';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';

import { TodoStatusesListModalComponent } from '../todo-statuses-list-modal/todo-statuses-list-modal.component';

@Component({
  selector: 'todo-status-select-input',
  templateUrl: './todo-status-select-input.component.html',
  styleUrls: ['./todo-status-select-input.component.scss'],
  entryComponents: [TodoStatusesListModalComponent]
})

export class TodoStatusSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('inputElement')
  inputElement: any;
  @ViewChild('tooltip')
  tooltip: TooltipDirective;

  @Input()
  project?: ShortTodoProject;
  @Input()
  name = 'todoStatus';
  @Input()
  model: TodoStatus = new TodoStatus();
  @Output()
  modelChange: EventEmitter<TodoStatus> = new EventEmitter<TodoStatus>();

  items: TodoStatus[];
  cachedResourcesService: TodoStatusesService;

  constructor(
    public app: AppService,
    public accountService: AccountService,
    public todoStatusesService: TodoStatusesService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService,
    public config: BaseResourceSelectInputConfig
  ) {
    super(translateService, config);
    this.cachedResourcesService = todoStatusesService.createCache();
  }
  search() {
    const filter: any = {};
    if (this.project) {
      filter.project = this.project.pk;
    }
    this.cachedResourcesService.ignoreCache = true;
    this.cachedResourcesService.loadAll('', filter);
  }
  onLookup() {
    const itemModal: TodoStatusesListModalComponent =
      this.app.modals(this.resolver).create(TodoStatusesListModalComponent);
    itemModal.project = this.project;
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.account = this.account;
    itemModal.text = this.translateService.instant('Select');
    itemModal.title = this.translateService.instant('Todo statuses');
    itemModal.project = this.project;
    itemModal.onOk.subscribe(($event: any) => {
      this.value = itemModal.item;
      if (this.inputElement) {
        this.inputElement.value = this.value.pk;
      }
      if (this.inputReadonly === false) {
        this.valueAsString = '';
      }
      itemModal.modal.hide();
    });
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = this.value;
    itemModal.modal.show();
  }
}
