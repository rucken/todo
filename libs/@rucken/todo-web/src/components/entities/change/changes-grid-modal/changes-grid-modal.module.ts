import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModalModule } from '@rucken/web';
import { ChangesGridModule } from '../changes-grid/changes-grid.module';
import { ChangesGridModalComponent } from './changes-grid-modal.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModalModule,
    ChangesGridModule
  ],
  declarations: [
    ChangesGridModalComponent
  ],
  entryComponents: [
    ChangesGridModalComponent
  ],
  exports: [
    ChangesGridModalComponent,
    EntityGridModalModule,
    ChangesGridModule
  ]
})
export class ChangesGridModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChangesGridModalModule,
      providers: []
    };
  }
}
