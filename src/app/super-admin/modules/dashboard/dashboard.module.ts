import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCompComponent } from './components/dashboard-comp/dashboard-comp.component';
/* import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; */
@NgModule({
  declarations: [
    // DashboardCompComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardCompComponent,
    /* MatButtonModule,
    MatCardModule */
  ]
})
export class DashboardModule { }
