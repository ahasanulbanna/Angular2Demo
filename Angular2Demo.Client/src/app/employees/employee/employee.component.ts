import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls:['./employee.component.css'],
    providers: [EmployeeService]

    
})
export class EmployeeComponent implements OnInit {
  
    

    constructor(private employeeServic: EmployeeService) { }

    ngOnInit() {
        //this._employeeService.getEmployees()
        //    .subscribe((employeeData) => this.employees = employeeData);
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
        form.reset();
        this.employeeServic.Selectedemployee = {
            EmployeeId: null,
            FistName: '',
            LastName: '',
            EmpCode: '',
            Position: '',
            Office:''
        }
    }
    onSubmit(form: NgForm) {
        this.employeeServic.postEmployee(form.value)
            .subscribe(data => {
               this.resetForm(form);
                console.log(123);
                
               
            })
    }
    //trackByEmpName(index: number, employee: any): string {
    //    return employee.name;
    //}

}