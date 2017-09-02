import { SelectInputComponent } from 'rucken';
import { TodoChange } from '../../../shared/models/todo-change.model';
import { Component, Input, EventEmitter, Output, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { TodoChangesListModalComponent } from '../todo-changes-list-modal/todo-changes-list-modal.component';
import { AppService } from 'rucken';
import { AccountService } from 'rucken';
import { TodoChangesService } from '../../../shared/todo-changes.service';
import { User } from 'rucken';
import { BaseResourceSelectInputConfig } from 'rucken';
import { BaseResourceSelectInputComponent } from 'rucken';
import { TranslateService } from '@ngx-translate/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'todo-change-select-input',
  templateUrl: './todo-change-select-input.component.html',
  styleUrls: ['./todo-change-select-input.component.scss'],
  entryComponents: [TodoChangesListModalComponent]
})
export class TodoChangeSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('inputElement')
  inputElement: any;
  @ViewChild('tooltip')
  tooltip: TooltipDirective;

  @Input()
  name = 'todoChange';
  @Input()
  model: TodoChange = new TodoChange();
  @Output()
  modelChange: EventEmitter<TodoChange> = new EventEmitter<TodoChange>();

  items: TodoChange[];
  cachedResourcesService: TodoChangesService;

  constructor(
    public app: AppService,
    public accountService: AccountService,
    public todoChangesService: TodoChangesService,
    public resolver: ComponentFactoryResolver,
    public sanitizer: DomSanitizer,
    public translateService: TranslateService,
    public config: BaseResourceSelectInputConfig
  ) {
    super(sanitizer, translateService, config);
    this.cachedResourcesService = todoChangesService.createCache();
  }
  get account(): User {
    return this.accountService.account;
  }
  onLookup() {
    const itemModal: TodoChangesListModalComponent =
      this.app.modals(this.resolver).create(TodoChangesListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.account = this.account;
    itemModal.text = this.translateService.instant('Select');
    itemModal.title = this.translateService.instant('Todo changes');
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
