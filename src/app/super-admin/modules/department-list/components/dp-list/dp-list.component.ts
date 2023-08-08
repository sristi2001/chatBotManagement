
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddNewDepartmentComponent } from '../add-new-department/add-new-department.component'; 
import {MatSort} from '@angular/material/sort';
import { UsersDataService } from 'src/app/services/users-data.service';

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

  constructor( private matDialog:MatDialog, private UsersDataService: UsersDataService) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit()
  {
    this.UsersDataService.getDepartments().subscribe(
      (departments) => {
        this.dataSource.data = departments; // Set the retrieved departments as data source
      },
      (error) => {
        console.error('Error fetching department list', error);
      }
    );
  }
  applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
  addDepartment(){
    /* const dialogRef = this.matDialog.open(AddNewDepartmentComponent,{
      data:'Hello'
    })
    dialogRef.afterClosed().subscribe((res:any)=>{
      console.log(res);  
    }) */
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
  {position: '5', departmentName: 'Boron', departmentAddress: 'mumbai', noOfDomain: 'B',date: '03/03.2001',action:"mode_edit"},
];
 