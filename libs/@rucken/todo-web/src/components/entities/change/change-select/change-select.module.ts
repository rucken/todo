import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntitySelectModule } from '@rucken/web';
import { ChangesGridModalModule } from '../changes-grid-modal/changes-grid-modal.module';
import { ChangeSelectComponent } from './change-select.component';

@NgModule({
  imports: [
    CommonModule,
    EntitySelectModule,
    ChangesGridModalModule
  ],
  declarations: [
    ChangeSelectComponent
  ],
  exports: [
    ChangeSelectComponent,
    EntitySelectModule,
    ChangesGridModalModule
  ]
})
export class ChangeSelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChangeSelectModule,
      providers: []
    };
  }
}
