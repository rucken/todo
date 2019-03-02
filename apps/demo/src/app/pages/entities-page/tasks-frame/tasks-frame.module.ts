import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TasksGridModule } from '@rucken/todo-web';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SharedModule } from '../../../shared/shared.module';
import { TasksFrameComponent } from './tasks-frame.component';
import { TASKS_FRAME_ROUTES } from './tasks-frame.routes';

@NgModule({
  imports: [
    SharedModule,
    NgxPermissionsModule,
    RouterModule.forChild(TASKS_FRAME_ROUTES),
    TasksGridModule,
    FormsModule
  ],
  declarations: [TasksFrameComponent]
})
export class TasksFrameModule {}
