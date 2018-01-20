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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.postEmployee = function (emp) {
        var body = JSON.stringify(emp);
        var headerOptionts = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOption = new http_1.RequestOptions({ method: http_1.RequestMethod.Post, headers: headerOptionts });
        return this.http.post('http://localhost:53497/api/Employees', body, requestOption).map(function (x) { return x.json(); });
    };
    EmployeeService.prototype.getEmployeeList = function () {
        var _this = this;
        this.http.get('http://localhost:53497/api/Employees')
            .map(function (data) {
            return data.json();
        }).toPromise().then(function (x) {
            _this.employeeList = x;
        });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete('http://localhost:53497/api/Employees/' + id).map(function (res) { return res.json(); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map