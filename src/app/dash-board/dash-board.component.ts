import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashboardComponent implements OnInit {

  // Injected dependencies 
  constructor(private router: Router, private service: EmployeeService) { }

  employee:any|undefined;

  ngOnInit(): void {

    // Subscribe invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
    this.service.getEmployee().subscribe(data => {
      this.employee = data;
      console.log("hello");
      console.log(this.employee);
      console.log("end");

    });
   }

  // when an onAddUser funstion is called, it will naviagte to the form view
  onAddUser() {
       this.router.navigate(["form"]);
  }

  //  Call deleteDataById method of service to delete employee
  deleteById(Id: number) {
      console.log(Id);  
      this.service.deleteById(Id).subscribe((data)  =>{
      console.log("data deleted!!!!! test");
      this.ngOnInit();
       this.router.navigate(["dashboard"]);
      });
      
  }

  // load existing employee record for updation on the form page
  editById(Id: number) {
    this.router.navigate(['update', Id]);
  }

}
