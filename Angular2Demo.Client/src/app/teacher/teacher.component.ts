import { Component } from '@angular/core';

@Component({
    selector: 'teacher-app',
    templateUrl: 'app/teacher/teacher.component.html'
})

export class TeacherComponent {
    teachers: any[];
    constructor() {
        this.teachers = [
            { name: "Abc", dept: "SWE" },
            { name: "Abc1", dept: "SWE" },
            { name: "Abc2", dept: "SWE" },
            { name: "Abc3", dept: "SWE" }
        ];
        
    }
    getTeacher(): void {
        this.teachers = [
            { name: "Abc", dept: "SWE" },
            { name: "Abc1", dept: "SWE" },
            { name: "Abc2", dept: "SWE" },
            { name: "Abc3", dept: "SWE" }
        ];
    }
    trackByTeacherName(index: number, teacher: any): string {
        return teacher.name;
    }
}