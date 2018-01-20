"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employees/employee/employee.component");
var teacher_component_1 = require("./teacher/teacher.component");
var home_component_1 = require("./home/home.component");
var other_component_1 = require("./other/other.component");
var employees_component_1 = require("./employees/employees.component");
var employee_list_component_1 = require("./employees/employee-list/employee-list.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'teacher', component: teacher_component_1.TeacherComponent },
    { path: 'employee', component: employees_component_1.EmployeesComponent },
    { path: 'employeelist', component: employee_list_component_1.EmployeeListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: other_component_1.OtherComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, teacher_component_1.TeacherComponent,
                home_component_1.HomeComponent, other_component_1.OtherComponent, employees_component_1.EmployeesComponent, employee_list_component_1.EmployeeListComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map