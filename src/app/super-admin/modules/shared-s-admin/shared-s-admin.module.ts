import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderSideBarWrapperComponent } from './components/header-side-bar-wrapper/header-side-bar-wrapper.component';
import { SharedSAdminRoutingModule } from './shared-s-admin-routing.module';
/* import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav'; */
import { MaterialModule } from '../../material/material.module';
@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    HeaderSideBarWrapperComponent
  ],
  imports: [
    CommonModule,
    SharedSAdminRoutingModule,
    MaterialModule,
    /* MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule */
  ],
})
export class SharedSAdminModule { }
