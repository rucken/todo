import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, AppService } from '@rucken/core';

import { AuthGuardService } from '@rucken/web';

@Injectable()
export class TodoHomeGuardService extends AuthGuardService {
  // todo: remove after update rucken
  firstHomeActivated = true;
  constructor(
    protected accountService: AccountService,
    protected router: Router,
    protected app: AppService,
    protected translateService: TranslateService
  ) {
    super(accountService, router, app, translateService);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.accountService.account && route.data.name && route.data.name === 'home' && this.firstHomeActivated) {
      let founded = false;
      if (!founded && this.accountService.account.checkPermissions(['read_projects-page'])) {
        founded = true;
        this.router.navigate(['/projects']);
      }
      if (!founded && this.accountService.account.checkPermissions(['read_admin-page'])) {
        founded = true;
        this.router.navigate(['/admin']);
      }
      if (!founded && this.accountService.account.checkPermissions(['read_account-page'])) {
        founded = true;
        this.router.navigate(['/account']);
      }
      if (!founded) {
        this.app.component.showErrorModal(
          this.translateService.instant('Not access')
        );
        return false;
      } else {
        this.firstHomeActivated = false;
      }
    }
    return true;
  }
}
