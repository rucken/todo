import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, User, UsersConfig, translate } from '@rucken/core';
import { MessageModalService, UserModalComponent, UsersGridComponent, UsersGridModalComponent } from '@rucken/web';
import { Project } from '@todo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, PaginationMeta, ProviderActionEnum } from 'ngx-repository';


@Component({
  selector: 'project-users-grid',
  templateUrl: './project-users-grid.component.html'
})
export class ProjectUsersGridComponent extends UsersGridComponent implements OnInit {

  @Input()
  project: Project;

  public paginationMeta: PaginationMeta;
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected usersConfig: UsersConfig,
    protected messageModalService: MessageModalService
  ) {
    super(
      modalService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      usersConfig,
      messageModalService
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl + '/project/' + this.project.id,
        ...this.usersConfig,
        globalEventResolver: (data: any, action: ProviderActionEnum) => {
          return action !== ProviderActionEnum.Create && action !== ProviderActionEnum.Delete;
        }
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.usersConfig,
        globalEventResolver: (data: any, action: ProviderActionEnum) => {
          return action !== ProviderActionEnum.Create && action !== ProviderActionEnum.Delete;
        }
      });
    }
  }
  createDeleteModal(item: User): BsModalRef {
    return this.modalService.show(UserModalComponent, {
      class: 'modal-md',
      initialState: {
        title: translate('Delete user'),
        message: translate('Do you really want to delete user "{{fullName}}" from project?'),
        yesTitle: translate('Delete'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createAppendFromGridModal(): BsModalRef {
    return this.modalService.show(UsersGridModalComponent, {
      class: 'modal-md',
      initialState: {
        title: translate('Select user for append to project'),
        yesTitle: translate('Append'),
        apiUrl: this.apiUrl
      }
    });
  }
}
