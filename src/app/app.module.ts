import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthSAdminModule } from './super-admin/modules/auth-s-admin/auth-s-admin.module';
import { SharedSAdminModule } from './super-admin/modules/shared-s-admin/shared-s-admin.module';
import { MyProfileModule } from './super-admin/modules/my-profile/my-profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentListModule } from './super-admin/modules/department-list/department-list.module';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedSAdminModule,
    AuthSAdminModule,
    MyProfileModule,
    DepartmentListModule,
    BrowserAnimationsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
