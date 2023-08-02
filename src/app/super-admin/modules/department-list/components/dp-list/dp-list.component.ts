/* import { Component } from '@angular/core';

@Component({
  selector: 'app-dp-list',
  templateUrl: './dp-list.component.html',
  styleUrls: ['./dp-list.component.scss']
})
export class DpListComponent {

}
 */

import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddNewDepartmentComponent } from '../add-new-department/add-new-department.component';
// import { FormsModule } from '@angular/forms'; 
import {MatSort} from '@angular/material/sort';
// import { IconOptions } from '@angular/material/icon';
/**
 * @title Table with pagination
 */
@Component({
    selector: 'app-dp-list',
    templateUrl: './dp-list.component.html',
    styleUrls: ['./dp-list.component.scss'],
})
export class DpListComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['position', 'departmentName', 'departmentAddress', 'noOfDomain','date','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor( private matDialog:MatDialog) {
    /* const users = Array.from({length: 80}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users) */;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit()
  {

  }
  applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
  addDepartment(){
    const dialogRef = this.matDialog.open(AddNewDepartmentComponent,{
      data:'Hello'
    })
    dialogRef.afterClosed().subscribe((res:any)=>{
      console.log(res);  
    })
  }
  edit(e: any) 
  {
     e.editable = !e.editable;
  }
}


export interface PeriodicElement {
  departmentName: string;
  position: string;
  departmentAddress: string;
  noOfDomain: string;
  date:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', departmentName: 'medical', departmentAddress: 'korba', noOfDomain: '3',date: '03/03.2001',action:"mode_edit"},
  {position: '2', departmentName: 'forest', departmentAddress: 'raipur', noOfDomain: '7',date: '04/03.2001',action:"mode_edit"},
  {position: '3', departmentName: 'school', departmentAddress: 'noida', noOfDomain: '5',date: '05/03.2001',action:"mode_edit"},
  {position: '4', departmentName: 'others', departmentAddress: 'delhi', noOfDomain: '7',date: '07/03.2001',action:"mode_edit"}, 
  /* {position: 5, departmentName: 'Boron', departmentAddress: 10.811, noOfDomain: 'B',date: '03/03.2001'},
  {position: 6, departmentName: 'Carbon', departmentAddress: 12.0107, noOfDomain: 'C',date: '03/03.2001'},
  {position: 7, departmentName: 'Nitrogen', departmentAddress: 14.0067, noOfDomain: 'N',date: '03/03.2001'},
  {position: 8, departmentName: 'Oxygen', departmentAddress: 15.9994, noOfDomain: 'O',date: '03/03.2001'},
  {position: 9, departmentName: 'Fluorine', departmentAddress: 18.9984, noOfDomain: 'F',date: '03/03.2001'},
  {position: 10, departmentName: 'Neon', departmentAddress: 20.1797, noOfDomain: 'Ne',date: '03/03.2001'},
  {position: 11, departmentName: 'Sodium', departmentAddress: 22.9897, noOfDomain: 'Na',date: '03/03.2001'},
  {position: 12, departmentName: 'Magnesium', departmentAddress: 24.305, noOfDomain: 'Mg',date: '03/03.2001'},
  {position: 13, departmentName: 'Aluminum', departmentAddress: 26.9815, noOfDomain: 'Al',date: '03/03.2001'},
  {position: 14, departmentName: 'Silicon', departmentAddress: 28.0855, noOfDomain: 'Si',date: '03/03.2001'},
  {position: 15, departmentName: 'Phosphorus', departmentAddress: 30.9738, noOfDomain: 'P',date: '03/03.2001'},
  {position: 16, departmentName: 'Sulfur', departmentAddress: 32.065, noOfDomain: 'S',date: '03/03.2001'},
  {position: 17, departmentName: 'Chlorine', departmentAddress: 35.453, noOfDomain: 'Cl',date: '03/03.2001'},
  {position: 18, departmentName: 'Argon', departmentAddress: 39.948, noOfDomain: 'Ar',date: '03/03.2001'},
  {position: 19, departmentName: 'Potassium', departmentAddress: 39.0983, noOfDomain: 'K',date: '03/03.2001'},
  {position: 20, departmentName: 'Calcium', departmentAddress: 40.078, noOfDomain: 'Ca',date: '03/03.2001'}, */
];
