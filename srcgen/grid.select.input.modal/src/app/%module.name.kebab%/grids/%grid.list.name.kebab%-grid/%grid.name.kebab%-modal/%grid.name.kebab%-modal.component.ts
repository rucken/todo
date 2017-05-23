import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { <%=grid.name.camel%> } from './../../../shared/models/<%=grid.name.kebab%>.model';
import { ModalDirective } from 'ngx-bootstrap';
import { AccountService } from 'rucken';
import { User, BaseResourceModalComponent } from 'rucken';
import { TextInputComponent } from 'rucken';

@Component({
  selector: '<%=grid.name.kebab%>-modal',
  templateUrl: './<%=grid.name.kebab%>-modal.component.html',
  styleUrls: ['./<%=grid.name.kebab%>-modal.component.scss']
})

export class <%=grid.name.camel%>ModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  account: User = null;
  @Input()
  item: any | <%=grid.name.camel%> = new <%=grid.name.camel%>();
  @Input()
  modelMeta: any = <%=grid.name.camel%>.meta();
  @Output()
  onClose: EventEmitter<<%=grid.name.camel%>ModalComponent> = new EventEmitter<<%=grid.name.camel%>ModalComponent>();
  @Output()
  onSave: EventEmitter<<%=grid.name.camel%>ModalComponent> = new EventEmitter<<%=grid.name.camel%>ModalComponent>();
}
