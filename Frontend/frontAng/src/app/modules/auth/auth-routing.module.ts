import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordRecoveryFormComponent } from './components/password-recovery-form/password-recovery-form.component';
import { UnauthGuard } from '../core/guards/unauth.guard';

const routes: Routes = [
  { path: 'logging', component: LoginComponent, canActivate: [UnauthGuard] },
  {
    path: 'registration',
    component: RegisterComponent,
    canActivate: [UnauthGuard],
  },
  { path: 'actiavte/:uid', component: AccountActivationComponent },
  { path: 'retrieve-password', component: PasswordRecoveryComponent },
  { path: 'retrieve-password/:uid', component: PasswordRecoveryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
