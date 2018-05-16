import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PromptFormModalModule } from '@rucken/web';
import { ChangeModalComponent } from './change-modal.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    PromptFormModalModule,
    BsDatepickerModule
  ],
  declarations: [
    ChangeModalComponent
  ],
  entryComponents: [
    ChangeModalComponent
  ],
  exports: [
    ChangeModalComponent,
    PromptFormModalModule,
    BsDatepickerModule
  ]
})
export class ChangeModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChangeModalModule,
      providers: []
    };
  }
}
