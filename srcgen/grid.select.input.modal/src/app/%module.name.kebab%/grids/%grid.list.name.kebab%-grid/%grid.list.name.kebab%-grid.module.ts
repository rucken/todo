import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%=grid.list.name.camel%>GridComponent } from './<%=grid.list.name.kebab%>-grid.component';
import { GridSearchPanelModule } from 'rucken';
import { TableColumnModule } from 'rucken';
import { GridRowButtonsModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { <%=grid.name.camel%>ModalModule } from './<%=grid.name.kebab%>-modal/<%=grid.name.kebab%>-modal.module';
import { ConfirmModalModule } from 'rucken';

@NgModule({
  imports: [
    CommonModule, TranslateModule.forChild(), GridSearchPanelModule.forRoot(),
    <%=grid.name.camel%>ModalModule.forRoot(), ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot()
  ],
  declarations: [
    <%=grid.list.name.camel%>GridComponent
  ],
  exports: [<%=grid.list.name.camel%>GridComponent],
  entryComponents: [<%=grid.list.name.camel%>GridComponent]
})
export class <%=grid.list.name.camel%>GridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=grid.list.name.camel%>GridModule,
      providers: []
    };
  }
}
