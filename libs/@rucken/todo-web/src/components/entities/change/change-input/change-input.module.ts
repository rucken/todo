import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityInputModule } from '@rucken/web';
import { ChangesGridModalModule } from '../changes-grid-modal/changes-grid-modal.module';
import { ChangeInputComponent } from './change-input.component';

@NgModule({
  imports: [
    CommonModule,
    EntityInputModule,
    ChangesGridModalModule
  ],
  declarations: [
    ChangeInputComponent
  ],
  exports: [
    ChangeInputComponent,
    EntityInputModule,
    ChangesGridModalModule
  ]
})
export class ChangeInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChangeInputModule,
      providers: []
    };
  }
}
