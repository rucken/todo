import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, IBaseEntityModalOptions, ModalsService, translate } from '@rucken/core';
import { STATUSES_CONFIG_TOKEN, StatusWithProject } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { StatusesGridModalComponent } from '../statuses-grid-modal/statuses-grid-modal.component';
import { StatusesGridComponent } from '../statuses-grid/statuses-grid.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'status-input',
  templateUrl: './status-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusInputComponent extends StatusesGridComponent implements OnInit {
  @Input()
  modalAppendFromGrid: IBaseEntityModalOptions = {
    component: StatusesGridModalComponent,
    initialState: {
      title: translate('Select status'),
      yesTitle: translate('Select')
    }
  };
  @Output()
  select = new EventEmitter<StatusWithProject>();

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(STATUSES_CONFIG_TOKEN)
    protected statusesConfig: IRestProviderOptions<StatusWithProject>
  ) {
    super(modalsService, errorsExtractor, translateService, dynamicRepository, statusesConfig);
  }
  ngOnInit() {
    this.mockedItems = [];
    this.useMock({
      items: this.mockedItems,
      ...this.statusesConfig
    });
    this.mockedItemsChange.subscribe(items => this.onSelect(items[0]));
  }
  defaultAppendFromGridModal() {
    this.modalAppendFromGrid = {
      ...this.modalAppendFromGrid,
      initialState: {
        ...this.modalAppendFromGrid.initialState,
        project: this.project
      }
    };
    return super.defaultAppendFromGridModal();
  }
  onSelect(item: StatusWithProject) {
    this.select.emit(item);
  }
}
