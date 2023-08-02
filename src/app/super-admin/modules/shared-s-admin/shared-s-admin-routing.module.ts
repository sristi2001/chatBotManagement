import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSideBarWrapperComponent } from './components/header-side-bar-wrapper/header-side-bar-wrapper.component';
const routes: Routes = [ 
{
    path: '',
    component:HeaderSideBarWrapperComponent,
    children:
    [
      {
        path:'myProfile',
        loadChildren:()=> import('../my-profile/my-profile-routing.module').then(m=>m.MyProfileRoutingModule)
      },
      {
        path:'dashboard',
        loadChildren:()=> import('../dashboard/dashboard-routing.module').then(m=>m.DashboardRoutingModule)
      },
       {       
        path:'departmentM',
        loadChildren:()=> import('../department-list/department-list-routing.module').then(m=>m.DepartmentListRoutingModule)
      }  
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedSAdminRoutingModule { }
