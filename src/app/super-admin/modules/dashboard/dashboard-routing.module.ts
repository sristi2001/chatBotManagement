import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCompComponent } from './components/dashboard-comp/dashboard-comp.component';
const routes: Routes = [
  {
    path:'dashboardComp',
    component: DashboardCompComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
