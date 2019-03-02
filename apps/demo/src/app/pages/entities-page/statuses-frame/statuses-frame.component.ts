import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'statuses-frame',
  templateUrl: './statuses-frame.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusesFrameComponent {
  public apiUrl = environment.apiUrl;
  parentTitle$: Observable<string>;
  title$: Observable<string>;
  constructor(private _activatedRoute: ActivatedRoute) {
    this.parentTitle$ = this._activatedRoute.parent.parent.data.pipe(map(data => data && data.meta && data.meta.title));
    this.title$ = this._activatedRoute.data.pipe(map(data => data && data.meta && data.meta.title));
  }
}
