import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
 
  employee: EmployeeModel = new EmployeeModel("",new Date,"", "","","", 0, "");

  Id: any = this.route.snapshot.paramMap.get("Id");

  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.service.getEmployeeById(this.Id).subscribe((getData: any) => {
    console.log(getData);
    this.employee = getData;
  });
    
  }

  onCancel() {
    this.router.navigate(["error"]);
    setTimeout(function(){
      
    },3000);

    this.router.navigate(["dashboard"]);
  }

  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }

  addEmployeeData() {
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe((data:any) => {
      this.router.navigate(["dashboard"])
    })
  
  }

  updateEmployeeData() {
    this.service.updateEmployeeById(this.employee, this.Id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });
  }
}
