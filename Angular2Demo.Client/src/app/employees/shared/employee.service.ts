import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Http, Response, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {

    Selectedemployee: Employee;
    employeeList: Employee[];

    constructor(private http: Http) { }

    postEmployee(emp: Employee) {

        var body = JSON.stringify(emp)
        var headerOptionts = new Headers({ 'Content-Type': 'application/json' });
        var requestOption = new RequestOptions({ method: RequestMethod.Post, headers: headerOptionts });
        return this.http.post('http://localhost:53497/api/Employees', body, requestOption).map(x => x.json());
    }

    getEmployeeList() {
        this.http.get('http://localhost:53497/api/Employees')
            .map((data: Response) => {
                return data.json() as Employee[];
            }).toPromise().then(x => {
                this.employeeList = x;
            })
    }

    deleteEmployee(id: number) {
        return this.http.delete('http://localhost:53497/api/Employees/' + id).map(res => res.json());
    }
    //constructor(private _http: Http) {}
    //getEmployees(): Observable<IEmployee[]>{
    //    return this._http.get("http://localhost:53497/api/values")
    //        .map((response: Response) => <IEmployee[]>response.json())
    //}
}