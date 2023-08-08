import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}

   /*  getPosts(){
      return this.httpClient.get(this.url);
    } */
    addDepartment(departmentData: any): Observable<any> {
      const url = `${this.url}/departments`;
      return this.httpClient.post(url, departmentData);
    }
  
    getDepartments(): Observable<any> {
      const url = `${this.url}/departments`;
      return this.httpClient.get(url);
    }
}
