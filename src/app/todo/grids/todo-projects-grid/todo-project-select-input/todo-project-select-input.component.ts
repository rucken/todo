import { SelectInputComponent } from 'rucken';
import { TodoProject } from '../../../shared/models/todo-project.model';
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { TodoProjectsListModalComponent } from '../todo-projects-list-modal/todo-projects-list-modal.component';
import { AppService } from 'rucken';
import { AccountService } from 'rucken';
import { TodoProjectsService } from '../../../shared/todo-projects.service';
import { User } from 'rucken';
import { BaseResourceSelectInputConfig } from 'rucken';
import { BaseResourceSelectInputComponent } from 'rucken';
import { TranslateService } from '@ngx-translate/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'todo-project-select-input',
  templateUrl: './todo-project-select-input.component.html',
  styleUrls: ['./todo-project-select-input.component.scss'],
  entryComponents: [TodoProjectsListModalComponent]
})
export class TodoProjectSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('tooltip')
  tooltip: TooltipDirective;
  @ViewChild('inputElement')
  inputElement: any;

  @Input()
  name = 'todoProject';
  @Input()
  model: TodoProject = new TodoProject();
  @Output()
  modelChange: EventEmitter<TodoProject> = new EventEmitter<TodoProject>();

  items: TodoProject[];
  cachedResourcesService: TodoProjectsService;

  constructor(
    public app: AppService,
    public accountService: AccountService,
    public todoProjectsService: TodoProjectsService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService,
    public config: BaseResourceSelectInputConfig
  ) {
    super(translateService, config);
    this.cachedResourcesService = todoProjectsService.createCache();
  }
  get account(): User {
    return this.accountService.account;
  }
  onLookup() {
    const itemModal: TodoProjectsListModalComponent =
      this.app.modals(this.resolver).create(TodoProjectsListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.account = this.account;
    itemModal.text = this.translateService.instant('Select');
    itemModal.title = this.translateService.instant('Todo projects');
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
