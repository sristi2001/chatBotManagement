import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentListRoutingModule } from './department-list-routing.module';
import { AddNewDepartmentComponent } from './components/add-new-department/add-new-department.component';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { DpListComponent } from './components/dp-list/dp-list.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [

    AddNewDepartmentComponent,
     AddDetailsComponent,
     DpListComponent,
     
  ],
  imports: [
    CommonModule,
    DepartmentListRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
    FormsModule
  ],
})
export class DepartmentListModule { }
