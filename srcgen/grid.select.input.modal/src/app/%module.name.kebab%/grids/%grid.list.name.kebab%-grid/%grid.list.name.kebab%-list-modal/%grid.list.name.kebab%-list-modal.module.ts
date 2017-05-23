import { <%=grid.list.name.camel%>GridModule } from '../<%=grid.list.name.kebab%>-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%=grid.list.name.camel%>ListModalComponent } from './<%=grid.list.name.kebab%>-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot(), TranslateModule.forChild(),
    ModalFooterButtonsModule.forRoot(), <%=grid.list.name.camel%>GridModule.forRoot()
  ],
  declarations: [
    <%=grid.list.name.camel%>ListModalComponent
  ],
  exports: [<%=grid.list.name.camel%>ListModalComponent],
  entryComponents: [<%=grid.list.name.camel%>ListModalComponent]
})
export class <%=grid.list.name.camel%>ListModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=grid.list.name.camel%>ListModalModule,
      providers: []
    };
  }
}
