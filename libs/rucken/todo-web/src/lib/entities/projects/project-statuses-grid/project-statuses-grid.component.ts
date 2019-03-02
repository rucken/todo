import { ChangeDetectionStrategy, Component, forwardRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, ModalsService, translate, User } from '@rucken/core';
import { Project, STATUSES_CONFIG_TOKEN, StatusWithProject } from '@rucken/todo-core';
import { BindIoInner } from 'ngx-bind-io';
import { DynamicRepository, IRestProviderOptions, ProviderActionEnum } from 'ngx-repository';
import { Subscription } from 'rxjs';
import { StatusesGridModalComponent } from '../../statuses/statuses-grid-modal/statuses-grid-modal.component';
import { StatusesGridComponent } from '../../statuses/statuses-grid/statuses-grid.component';

@BindIoInner()
@Component({
  selector: 'project-statuses-grid',
  templateUrl: './project-statuses-grid.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectStatusesGridComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectStatusesGridComponent extends StatusesGridComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  @Input()
  modalDelete = {
    initialState: {
      title: translate('Delete status'),
      message: translate('Do you really want to delete status "{{title}}" from project?')
    }
  };
  @Input()
  modalAppendFromGrid = {
    component: StatusesGridModalComponent,
    initialState: {
      title: translate('Select status for append to project')
    }
  };
  @Input()
  project: Project = undefined;
  mockedItemsChangeSubscription: Subscription;

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(STATUSES_CONFIG_TOKEN)
    protected statusesConfig: IRestProviderOptions<User>
  ) {
    super(modalsService, errorsExtractor, translateService, dynamicRepository, statusesConfig);
  }
  ngOnInit(overrided?: boolean) {
    if (!overrided) {
      return;
    }
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl + '/project/' + this.project.id,
        autoload: !!this.project.id,
        ...this.statusesConfig,
        globalEventResolver: (data: any, action: ProviderActionEnum) => {
          return action !== ProviderActionEnum.Create && action !== ProviderActionEnum.Delete;
        }
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        autoload: true,
        ...this.statusesConfig,
        globalEventResolver: (data: any, action: ProviderActionEnum) => {
          return action !== ProviderActionEnum.Create && action !== ProviderActionEnum.Delete;
        }
      });
    }
    if (this.mockedItemsChangeSubscription) {
      this.mockedItemsChangeSubscription.unsubscribe();
    }
    this.mockedItemsChange.subscribe(permissions => this._onChange(permissions));
  }
  ngOnDestroy() {
    if (this.mockedItemsChangeSubscription) {
      this.mockedItemsChangeSubscription.unsubscribe();
    }
  }
  writeValue(statuses: StatusWithProject[]): void {
    this.mockedItems = statuses || [];
    this.ngOnInit(true);
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
  _onChange = (value: User) => {};
  _onTouched = () => {};
}
