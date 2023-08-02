import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewDepartmentComponent } from './components/add-new-department/add-new-department.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { DpListComponent } from './components/dp-list/dp-list.component'
const routes: Routes = [
  {
    path:'dpListTable',
    component: DpListComponent
  },
  {
    path:'addNewDp',
    component: AddNewDepartmentComponent
  },
  {
    path:'addDeatil',
    component: AddDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentListRoutingModule { }
