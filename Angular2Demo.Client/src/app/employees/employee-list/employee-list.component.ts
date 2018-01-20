import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee';
@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    constructor(private employeeService: EmployeeService) { }
    ngOnInit() {
        this.employeeService.getEmployeeList();
    }
    showForEdit(emp: Employee) {
        this.employeeService.Selectedemployee = emp;
    }
    onDelete(id: number) {
        if (confirm('Are you sure delete this record?') == true) {
            this.employeeService.deleteEmployee(id)
                .subscribe(x => {
                    this.employeeService.getEmployeeList();
                })
        }
    }
    printContent(e1: string) {
        var originalContent = document.body.innerHTML;
        var print = document.getElementById(e1).innerHTML;
        document.body.innerHTML = print;
        window.print();
        document.body.innerHTML = originalContent;
    }
   
}