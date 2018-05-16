import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModule, PipesModule } from '@rucken/web';
import { TaskModalModule } from '../task-modal/task-modal.module';
import { TasksGridComponent } from './tasks-grid.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModule,
    TaskModalModule,
    PipesModule.forRoot()
  ],
  declarations: [
    TasksGridComponent
  ],
  exports: [
    TasksGridComponent,
    EntityGridModule,
    TaskModalModule,
    PipesModule
  ]
})
export class TasksGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TasksGridModule,
      providers: []
    };
  }
}
