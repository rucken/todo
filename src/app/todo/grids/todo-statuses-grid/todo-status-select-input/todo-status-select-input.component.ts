import { SelectInputComponent } from 'rucken';
import { TodoStatus } from '../../../shared/models/todo-status.model';
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { TodoStatusesListModalComponent } from '../todo-statuses-list-modal/todo-statuses-list-modal.component';
import { AppService } from 'rucken';
import { AccountService } from 'rucken';
import { TodoStatusesService } from '../../../shared/todo-statuses.service';
import { User } from 'rucken';
import { BaseResourceSelectInputConfig } from 'rucken';
import { BaseResourceSelectInputComponent } from 'rucken';
import { TranslateService } from '@ngx-translate/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { ShortTodoProject } from '../../../shared/models/short-todo-project.model';

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
  get account(): User {
    return this.accountService.account;
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
