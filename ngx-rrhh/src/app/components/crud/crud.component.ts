import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ApiService } from '../../services/api.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  employees: Employee[] = [];
  employeeForm!: FormGroup;
  displayDialog = false;
  isEditMode = false;
  loading = false;

  departments = [
    { label: 'Recursos Humanos', value: 'HR' },
    { label: 'Finanzas', value: 'Finance' },
    { label: 'Tecnología', value: 'IT' },
    { label: 'Ventas', value: 'Sales' },
    { label: 'Operaciones', value: 'Operations' }
  ];

  statuses = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' }
  ];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  initForm(): void {
    this.employeeForm = this.fb.group({
      id: [null],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      department: ['', Validators.required],
      position: ['', [Validators.required, Validators.minLength(3)]],
      salary: [0, [Validators.required, Validators.min(0)]],
      hireDate: [null, Validators.required],
      status: ['active', Validators.required]
    });
  }

  loadEmployees(): void {
    this.loading = true;
    this.apiService.getEmployees().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.employees = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading employees:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo cargar los empleados'
        });
        this.loading = false;
      }
    });
  }

  openDialog(): void {
    this.isEditMode = false;
    this.employeeForm.reset();
    this.employeeForm.patchValue({ status: 'active' });
    this.displayDialog = true;
  }

  editEmployee(employee: Employee): void {
    this.isEditMode = true;
    this.employeeForm.patchValue(employee);
    this.displayDialog = true;
  }

  saveEmployee(): void {
    if (this.employeeForm.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Validación',
        detail: 'Por favor complete todos los campos requeridos'
      });
      return;
    }

    const employee = this.employeeForm.value;

    if (this.isEditMode && employee.id) {
      this.apiService.updateEmployee(employee.id, employee).subscribe({
        next: (response) => {
          if (response.success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Empleado actualizado correctamente'
            });
            this.loadEmployees();
            this.displayDialog = false;
          }
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo actualizar el empleado'
          });
        }
      });
    } else {
      this.apiService.createEmployee(employee).subscribe({
        next: (response) => {
          if (response.success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Empleado creado correctamente'
            });
            this.loadEmployees();
            this.displayDialog = false;
          }
        },
        error: (error) => {
          console.error('Error creating employee:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo crear el empleado'
          });
        }
      });
    }
  }

  deleteEmployee(employee: Employee): void {
    this.confirmationService.confirm({
      message: `¿Está seguro que desea eliminar a ${employee.firstName} ${employee.lastName}?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (employee.id) {
          this.apiService.deleteEmployee(employee.id).subscribe({
            next: (response) => {
              if (response.success) {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Éxito',
                  detail: 'Empleado eliminado correctamente'
                });
                this.loadEmployees();
              }
            },
            error: (error) => {
              console.error('Error deleting employee:', error);
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'No se pudo eliminar el empleado'
              });
            }
          });
        }
      }
    });
  }

  closeDialog(): void {
    this.displayDialog = false;
    this.employeeForm.reset();
  }

  getStatusBadgeClass(status: string): string {
    return status === 'active' ? 'badge-success' : 'badge-danger';
  }
}
