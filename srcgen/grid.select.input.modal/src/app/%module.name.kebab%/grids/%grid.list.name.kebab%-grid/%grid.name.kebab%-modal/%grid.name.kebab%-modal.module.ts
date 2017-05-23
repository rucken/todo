import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%=grid.name.camel%>ModalComponent } from './<%=grid.name.kebab%>-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    ModalFooterButtonsModule.forRoot(), TextInputModule.forRoot()
  ],
  declarations: [
    <%=grid.name.camel%>ModalComponent
  ],
  exports: [<%=grid.name.camel%>ModalComponent],
  entryComponents: [<%=grid.name.camel%>ModalComponent]
})
export class <%=grid.name.camel%>ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=grid.name.camel%>ModalModule,
      providers: []
    };
  }
}
