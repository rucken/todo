import { SelectInputComponent } from '@rucken/web';
import { <%=grid.name.camel%> } from '<%=module.name.kebab%>-core';
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { <%=grid.list.name.camel%>ListModalComponent } from '../<%=grid.list.name.kebab%>-list-modal/<%=grid.list.name.kebab%>-list-modal.component';
import { AppService } from '@rucken/core';
import { AccountService } from '@rucken/core';
import { <%=grid.list.name.camel%>Service } from '<%=module.name.kebab%>-core';
import { User } from '@rucken/core';
import { BaseResourceSelectInputConfig } from '@rucken/web';
import { BaseResourceSelectInputComponent } from '@rucken/web';
import { TranslateService } from '@ngx-translate/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: '<%=grid.name.kebab%>-select-input',
  templateUrl: './<%=grid.name.kebab%>-select-input.component.html',
  styleUrls: ['./<%=grid.name.kebab%>-select-input.component.scss'],
  entryComponents: [<%=grid.list.name.camel%>ListModalComponent]
})
export class <%=grid.name.camel%>SelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('tooltip')
  tooltip: TooltipDirective;
  @ViewChild('inputElement')
  inputElement: any;

  @Input()
  name = '<%=grid.name.lower.camel%>';
  @Input()
  model: any | <%=grid.name.camel%> = new <%=grid.name.camel%>();
  @Output()
  modelChange: EventEmitter<any | <%=grid.name.camel%>> = new EventEmitter<any | <%=grid.name.camel%>>();

  items: any[] | <%=grid.name.camel%>[] = [];
  cachedResourcesService: <%=grid.list.name.camel%>Service;

  constructor(
    public app: AppService,
    public accountService: AccountService,
    public <%=grid.list.name.lower.camel%>Service: <%=grid.list.name.camel%>Service,
    public resolver: ComponentFactoryResolver,
    public sanitizer: DomSanitizer,
    public translateService: TranslateService,
    public config: BaseResourceSelectInputConfig
  ) {
    super(translateService, config);
    this.cachedResourcesService = <%=grid.list.name.lower.camel%>Service.createCache();
  }
  get account(): User {
    return this.accountService.account;
  }
  onLookup() {
    const itemModal: <%=grid.list.name.camel%>ListModalComponent =
      this.app.modals(this.resolver).create(<%=grid.list.name.camel%>ListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.account = this.account;
    itemModal.text = this.translateService.instant('Select');
    itemModal.title = this.translateService.instant('<%=grid.list.name.caption%>');
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
