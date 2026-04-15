export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  hireDate: Date;
  status: 'active' | 'inactive';
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
