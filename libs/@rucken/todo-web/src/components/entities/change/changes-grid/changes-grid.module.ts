import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModule } from '@rucken/web';
import { ChangeModalModule } from '../change-modal/change-modal.module';
import { ChangesGridComponent } from './changes-grid.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModule,
    ChangeModalModule
  ],
  declarations: [
    ChangesGridComponent
  ],
  exports: [
    ChangesGridComponent,
    EntityGridModule,
    ChangeModalModule
  ]
})
export class ChangesGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChangesGridModule,
      providers: []
    };
  }
}
