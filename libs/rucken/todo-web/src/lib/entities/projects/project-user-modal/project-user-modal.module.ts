import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PromptFormModalModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { ProjectUserModalComponent } from './project-user-modal.component';

@NgModule({
  imports: [CommonModule, PromptFormModalModule, TranslateModule.forChild(), NgxBindIOModule],
  declarations: [ProjectUserModalComponent],
  entryComponents: [ProjectUserModalComponent],
  exports: [ProjectUserModalComponent, PromptFormModalModule]
})
export class ProjectUserModalModule {}
