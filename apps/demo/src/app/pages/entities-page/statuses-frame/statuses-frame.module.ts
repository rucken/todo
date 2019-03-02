import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StatusesGridModule } from '@rucken/todo-web';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SharedModule } from '../../../shared/shared.module';
import { StatusesFrameComponent } from './statuses-frame.component';
import { STATUSES_FRAME_ROUTES } from './statuses-frame.routes';

@NgModule({
  imports: [
    SharedModule,
    NgxPermissionsModule,
    RouterModule.forChild(STATUSES_FRAME_ROUTES),
    StatusesGridModule,
    FormsModule
  ],
  declarations: [StatusesFrameComponent]
})
export class StatusesFrameModule {}
