import { Injectable } from '@angular/core';
import { HttpHelper } from '@rucken/core';

import { environment } from './../../../environments/environment';

@Injectable()
export class TodoHttpHelper extends HttpHelper {
  direct = environment.type === 'mockapi';
}
