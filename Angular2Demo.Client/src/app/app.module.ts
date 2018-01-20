import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component'


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'employee', component: EmployeesComponent },
    { path: 'employeelist', component: EmployeeListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: OtherComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, TeacherComponent,
        HomeComponent, OtherComponent, EmployeesComponent, EmployeeListComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
