import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Formulario de Empleado</h2>
      
      <form (ngSubmit)="onSubmit()" #employeeForm="ngForm">
        <div class="form-group">
          <label for="nombre">Nombre Completo</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            [(ngModel)]="employee.nombre" 
            required
            #nombre="ngModel">
          <div *ngIf="nombre.invalid && nombre.touched" class="error">
            El nombre es requerido
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            [(ngModel)]="employee.email" 
            required
            email
            #email="ngModel">
          <div *ngIf="email.invalid && email.touched" class="error">
            Email válido es requerido
          </div>
        </div>

        <div class="form-group">
          <label for="puesto">Puesto</label>
          <input 
            type="text" 
            id="puesto" 
            name="puesto" 
            [(ngModel)]="employee.puesto" 
            required
            #puesto="ngModel">
          <div *ngIf="puesto.invalid && puesto.touched" class="error">
            El puesto es requerido
          </div>
        </div>

        <div class="form-group">
          <label for="departamento">Departamento</label>
          <input 
            type="text" 
            id="departamento" 
            name="departamento" 
            [(ngModel)]="employee.departamento" 
            required
            #departamento="ngModel">
          <div *ngIf="departamento.invalid && departamento.touched" class="error">
            El departamento es requerido
          </div>
        </div>

        <div class="form-group">
          <label for="telefono">Teléfono</label>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono" 
            [(ngModel)]="employee.telefono" 
            required
            pattern="[0-9]{10,15}"
            #telefono="ngModel">
          <div *ngIf="telefono.invalid && telefono.touched" class="error">
            Teléfono válido es requerido (10-15 dígitos)
          </div>
        </div>

        <div class="form-group">
          <label for="fechaIngreso">Fecha de Ingreso</label>
          <input 
            type="date" 
            id="fechaIngreso" 
            name="fechaIngreso" 
            [(ngModel)]="employee.fechaIngreso" 
            required
            #fechaIngreso="ngModel">
          <div *ngIf="fechaIngreso.invalid && fechaIngreso.touched" class="error">
            La fecha de ingreso es requerida
          </div>
        </div>

        <button type="submit" [disabled]="employeeForm.invalid || isLoading">
          {{ isLoading ? 'Enviando...' : 'Enviar' }}
        </button>

        <div *ngIf="successMessage" class="success">
          {{ successMessage }}
        </div>

        <div *ngIf="errorMessage" class="error">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  `,
  styles: [`
    .container {
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      font-family: Arial, sans-serif;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    input.ng-invalid.ng-touched {
      border-color: red;
    }
    .error {
      color: red;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    .success {
      color: green;
      margin-top: 1rem;
      padding: 0.5rem;
      background-color: #e8f5e9;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    button:disabled {
      background-color: #ccc;
    }
    button:hover:not(:disabled) {
      background-color: #0056b3;
    }
  `]
})
export class EmployeeFormComponent {
  employee: Employee = {
    nombre: '',
    email: '',
    puesto: '',
    departamento: '',
    telefono: '',
    fechaIngreso: ''
  };

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    if (this.isLoading) return;

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = 'Empleado creado exitosamente';
        this.resetForm();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Error al crear empleado: ' + error.message;
      }
    });
  }

  resetForm(): void {
    this.employee = {
      nombre: '',
      email: '',
      puesto: '',
      departamento: '',
      telefono: '',
      fechaIngreso: ''
    };
  }
}
