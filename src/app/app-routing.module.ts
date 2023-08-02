import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
    path: 'shared',
    loadChildren: () => import('./super-admin/modules/shared-s-admin/shared-s-admin.module').then(m => m.SharedSAdminModule)
  }, 
  /* {
  path:'',
  loadChildren:()=> import( './super-admin/modules/auth-s-admin/auth-s-admin.module').then(m=> m.AuthSAdminModule)
  } ,
  {
    path:'',
    loadChildren:()=> import( './super-admin/modules/my-profile/my-profile-routing.module').then(m=> m.MyProfileRoutingModule)
    }  */
    /*  {
      path: 'departmentM',
      loadChildren: () =>import('./super-admin/modules/department-list/department-list.module').then(m=>m.DepartmentListModule)
    } 
 */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
