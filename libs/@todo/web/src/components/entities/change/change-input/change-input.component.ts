import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { Change, ChangesConfig } from '@todo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { ChangesGridModalComponent } from '../changes-grid-modal/changes-grid-modal.component';
import { ChangesGridComponent } from '../changes-grid/changes-grid.component';
import { MessageModalService } from '@rucken/web';


@Component({
  selector: 'change-input',
  templateUrl: './change-input.component.html'
})
export class ChangeInputComponent extends ChangesGridComponent implements OnInit {

  @Output()
  select = new EventEmitter<Change>();

  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected changesConfig: ChangesConfig,
    protected messageModalService: MessageModalService
  ) {
    super(
      modalService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      changesConfig,
      messageModalService
    );
  }
  ngOnInit() {
    this.mockedItems = [];
    this.repository.useMock({
      items: this.mockedItems,
      ...this.changesConfig
    });
    this.mockedItemsChange.subscribe(items =>
      this.onSelect(items[0])
    );
  }
  createAppendFromGridModal(): BsModalRef {
    return this.modalService.show(ChangesGridModalComponent, {
      class: 'modal-md',
      initialState: {
        title: translate('Select change'),
        yesTitle: translate('Select'),
        apiUrl: this.apiUrl
      }
    });
  }
  onSelect(item: Change) {
    this.select.emit(item);
  }
}
