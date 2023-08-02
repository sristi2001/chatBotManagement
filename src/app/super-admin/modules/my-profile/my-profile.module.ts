import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { SharedSAdminModule } from '../shared-s-admin/shared-s-admin.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    Page2Component,
    Page3Component
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    SharedSAdminModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports:[
  Page2Component,

]
})
export class MyProfileModule { }
