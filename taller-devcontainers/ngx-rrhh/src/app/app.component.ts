import { Component } from '@angular/core';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeFormComponent, HttpClientModule],
  template: `<app-employee-form></app-employee-form>`,
  styles: []
})
export class AppComponent {}
