import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
@Component({
  selector: 'app-dashboard-comp',
  templateUrl: './dashboard-comp.component.html',
  styleUrls: ['./dashboard-comp.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
})
export class DashboardCompComponent {

}
