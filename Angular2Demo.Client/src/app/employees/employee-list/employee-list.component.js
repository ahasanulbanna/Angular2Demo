"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("../shared/employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.employeeService.getEmployeeList();
    };
    EmployeeListComponent.prototype.showForEdit = function (emp) {
        this.employeeService.Selectedemployee = emp;
    };
    EmployeeListComponent.prototype.onDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure delete this record?') == true) {
            this.employeeService.deleteEmployee(id)
                .subscribe(function (x) {
                _this.employeeService.getEmployeeList();
            });
        }
    };
    EmployeeListComponent.prototype.printContent = function (e1) {
        var originalContent = document.body.innerHTML;
        var print = document.getElementById(e1).innerHTML;
        document.body.innerHTML = print;
        window.print();
        document.body.innerHTML = originalContent;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map