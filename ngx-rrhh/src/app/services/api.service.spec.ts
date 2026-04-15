import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Employee } from '../models/employee.model';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch employees', () => {
    const mockEmployees: Employee[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '1234567890',
        department: 'HR',
        position: 'Manager',
        salary: 50000,
        hireDate: new Date(),
        status: 'active'
      }
    ];

    service.getEmployees().subscribe((response) => {
      expect(response.success).toBeTruthy();
      expect(response.data).toEqual(mockEmployees);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/employees');
    expect(req.request.method).toBe('GET');
    req.flush({
      success: true,
      data: mockEmployees,
      message: 'Success'
    });
  });
});
