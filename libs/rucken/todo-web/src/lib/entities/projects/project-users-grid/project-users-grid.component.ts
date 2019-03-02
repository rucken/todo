import { ChangeDetectionStrategy, Component, forwardRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
  ErrorsExtractor,
  IBaseEntityModalOptions,
  ModalsService,
  translate,
  User,
  USERS_CONFIG_TOKEN
} from '@rucken/core';
import { Project } from '@rucken/todo-core';
import { UsersGridComponent, UsersGridModalComponent } from '@rucken/web';
import { BindIoInner } from 'ngx-bind-io';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, IRestProviderOptions, ProviderActionEnum } from 'ngx-repository';
import { Subscription } from 'rxjs';
import { ProjectUserModalComponent } from '../project-user-modal/project-user-modal.component';

@BindIoInner()
@Component({
  selector: 'project-users-grid',
  templateUrl: './project-users-grid.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectUsersGridComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectUsersGridComponent extends UsersGridComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input()
  modalItem: IBaseEntityModalOptions = {
    component: ProjectUserModalComponent,
    initialState: {
      simpleMode: true
    }
  };
  @Input()
  modalDelete = {
    initialState: {
      title: translate('Delete user'),
      message: translate('Do you really want to delete user "{{fullName}}" from project?')
    }
  };
  @Input()
  modalAppendFromGrid = {
    component: UsersGridModalComponent,
    initialState: {
      title: translate('Select user for append to project'),
      simpleMode: true
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
    public modalService: BsModalService,
    @Inject(USERS_CONFIG_TOKEN)
    protected usersConfig: IRestProviderOptions<User>
  ) {
    super(modalsService, errorsExtractor, translateService, dynamicRepository, usersConfig);
  }
  ngOnInit(overrided?: boolean) {
    if (!overrided) {
      return;
    }
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl + '/project/' + this.project.id,
        autoload: !!this.project.id,
        ...this.usersConfig,
        globalEventResolver: (data: any, action: ProviderActionEnum) => {
          return action !== ProviderActionEnum.Create && action !== ProviderActionEnum.Delete;
        }
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        autoload: true,
        ...this.usersConfig,
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
  writeValue(users: User[]): void {
    this.mockedItems = users || [];
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
