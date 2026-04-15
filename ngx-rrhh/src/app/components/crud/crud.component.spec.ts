import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ApiService } from '../../services/api.service';
import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getEmployees']);

    await TestBed.configureTestingModule({
      declarations: [CrudComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        TableModule,
        InputTextModule
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    component = TestBed.createComponent(CrudComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employees on init', () => {
    component.ngOnInit();
    expect(apiService.getEmployees).toHaveBeenCalled();
  });
});
