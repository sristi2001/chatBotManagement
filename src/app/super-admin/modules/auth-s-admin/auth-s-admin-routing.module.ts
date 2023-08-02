import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPassword2Component } from './components/forgot-password2/forgot-password2.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
   {
    path:'login',
    component: LoginComponent
  },
  {
    path:'forgotPassWord1',
    component: ForgotPasswordComponent
  },
  {
    path:'forgotPassWord2',
    component: ForgotPassword2Component
  },
  {
    path:'createPassword',
    component: CreatePasswordComponent
  }, 
  {
    path:'register',
    component: RegisterComponent
  }      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSAdminRoutingModule { }


