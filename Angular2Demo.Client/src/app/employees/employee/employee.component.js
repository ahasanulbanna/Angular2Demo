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
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeServic) {
        this.employeeServic = employeeServic;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        //this._employeeService.getEmployees()
        //    .subscribe((employeeData) => this.employees = employeeData);
        this.resetForm();
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.employeeServic.Selectedemployee = {
            EmployeeId: null,
            FistName: '',
            LastName: '',
            EmpCode: '',
            Position: '',
            Office: ''
        };
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.employeeServic.postEmployee(form.value)
            .subscribe(function (data) {
            _this.resetForm(form);
            console.log(123);
        });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.css'],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map