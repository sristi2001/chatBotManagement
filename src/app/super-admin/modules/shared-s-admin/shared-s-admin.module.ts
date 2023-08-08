import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderSideBarWrapperComponent } from './components/header-side-bar-wrapper/header-side-bar-wrapper.component';
import { SharedSAdminRoutingModule } from './shared-s-admin-routing.module';
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
    
  ],
})
export class SharedSAdminModule { }
