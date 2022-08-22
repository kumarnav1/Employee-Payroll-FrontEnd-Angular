import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { }

  insertEmployee(employee: any) {
    return this.http.post("http://localhost:8080/employeepayrollservice/create", employee);
  }

  getEmployee() {
    return this.http.get("http://localhost:8080/employeepayrollservice/get");
  }

  getEmployeeById(Id: number) {
    return this.http.get("http://localhost:8080/employeepayrollservice/get/"+Id);
  }

  updateEmployeeById(employee: any,Id: number) {
    return this.http.put("http://localhost:8080/employeepayrollservice/update/"+Id, employee);
  }

  deleteById(employeeId:number): Observable<any> {
    return this.http.delete("http://localhost:8080/employeepayrollservice/delete/"+employeeId);
  }
}
