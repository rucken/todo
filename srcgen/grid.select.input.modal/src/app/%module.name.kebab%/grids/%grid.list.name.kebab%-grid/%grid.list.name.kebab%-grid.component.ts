import { User } from 'rucken';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ElementRef } from '@angular/core';
import { <%=grid.name.camel%> } from './../../shared/models/<%=grid.name.kebab%>.model';
import { <%=grid.name.camel%>ModalComponent } from './<%=grid.name.kebab%>-modal/<%=grid.name.kebab%>-modal.component';
import { ConfirmModalComponent } from 'rucken';
import { <%=grid.list.name.camel%>Service } from '../../shared/<%=grid.list.name.kebab%>.service';
import { AppService } from 'rucken';
import { AccountService } from 'rucken';
import { MetaModel } from 'rucken';
import { BaseResourcesGridComponent } from 'rucken';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '<%=grid.list.name.kebab%>-grid',
  templateUrl: './<%=grid.list.name.kebab%>-grid.component.html',
  styleUrls: ['./<%=grid.list.name.kebab%>-grid.component.scss'],
  entryComponents: [<%=grid.name.camel%>ModalComponent, ConfirmModalComponent]
})
export class <%=grid.list.name.camel%>GridComponent extends BaseResourcesGridComponent {

  @Output()
  onSelectItems: EventEmitter<any[] | <%=grid.name.camel%>[]>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  modelMeta: any = <%=grid.name.camel%>.meta();
  items: any[] | <%=grid.name.camel%>[];
  selectedItems: any[] | <%=grid.name.camel%>[];
  cachedResourcesService: <%=grid.list.name.camel%>Service;

  constructor(
    public <%=grid.list.name.lower.camel%>Service: <%=grid.list.name.camel%>Service,
    public accountService: AccountService,
    public app: AppService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService
  ) {
    super();
    this.cachedResourcesService = <%=grid.list.name.lower.camel%>Service.createCache();
  }
  get account(): User {
    return this.accountService.account;
  }
  get readonly() {
    return this.hardReadonly !== true || !this.account || !this.account.checkPermissions(['add_<%=grid.name.kebab%>', 'change_<%=grid.name.kebab%>', 'delete_<%=grid.name.kebab%>']);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: any | <%=grid.name.camel%>ModalComponent = this.app.modals(this.resolver).create(<%=grid.name.camel%>ModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['add_<%=grid.name.kebab%>']);
    itemModal.text = this.translateService.instant('Create');
    itemModal.title = this.translateService.instant('Create new <%=grid.item.name.caption%>');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new <%=grid.name.camel%>();
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showEditModal(item: any | <%=grid.name.camel%>) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: any | <%=grid.name.camel%>ModalComponent = this.app.modals(this.resolver).create(<%=grid.name.camel%>ModalComponent);
    itemModal.account = this.accountService.account;
    itemModal.readonly = this.hardReadonly || !this.account || !this.account.checkPermissions(['change_<%=grid.name.kebab%>']);
    itemModal.text = this.translateService.instant('Save');
    itemModal.title = this.translateService.instant('Edit <%=grid.item.name.caption%>');
    if (itemModal.readonly) {
      itemModal.title = this.translateService.instant('<%=grid.name.caption%> info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new <%=grid.name.camel%>(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
  }
  showRemoveModal(item: any | <%=grid.name.camel%>) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = this.translateService.instant('Remove');
    confirm.message = this.translateService.instant('Are you sure you want to remove a <%=grid.item.name.caption%>?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
  }
  save(itemModal: any | <%=grid.name.camel%>ModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (<%=grid.name.lower.camel%>: any | <%=grid.name.camel%>) => {
        itemModal.modal.hide();
      }, (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(errors.message.join(', ')).subscribe(
            () => {
              itemModal.info.emit({ name: '' });
            });
        } else {
          itemModal.errors.emit(errors);
        }
      });
  }
  remove(itemModal: ConfirmModalComponent) {
    this.cachedResourcesService.remove(this.selectedItems).subscribe(
      () => {
        itemModal.modal.hide();
      },
      (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(errors.message.join(', ')).subscribe(
            () => {
              this.focus();
            });
        } else {
          itemModal.errors.emit(errors);
        }
      });
  }
}
