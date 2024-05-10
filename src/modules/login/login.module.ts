import { NgModule } from '@angular/core';

import { LoginOtpComponent } from './login-otp/login-otp.component';
import { LoginNumComponent } from './login-num/login-num.component';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

const loginComponents = [LoginOtpComponent,LoginNumComponent,LoginComponent];
@NgModule({
  declarations: [...loginComponents],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  bootstrap: [LoginComponent],
})
export class LoginModule { }

