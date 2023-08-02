import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthSAdminRoutingModule } from './auth-s-admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPassword2Component } from './components/forgot-password2/forgot-password2.component';
import { SharedSAdminModule } from '../shared-s-admin/shared-s-admin.module';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ForgotPassword2Component,
    CreatePasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthSAdminRoutingModule,
    SharedSAdminModule

  ],
  exports:[
    LoginComponent
  ]
})
export class AuthSAdminModule { 
 
}
