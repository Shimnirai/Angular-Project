import { Component } from '@angular/core';
import {IEmployee} from './employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeList: IEmployee [];
  showEdit: boolean;

  constructor(){
    this.employeeList = [];
    this.showEdit = false;
    this.addDemoEmployee();
  }

  addDemoEmployee() {
    this.employeeList =[
      {EmployeeID: 1, FirstName: 'Shimni', LastName: 'Rai', Salary: 9000, DOB: '24/12/2001', Email: 'shimnirai@gmail.com'},
      {EmployeeID: 2, FirstName: 'Yazhini', LastName: 'Shankar', Salary: 5000, DOB: '19/08/2001', Email: 'yazhini@gmail.com'},
      {EmployeeID: 3, FirstName: 'Sanjana', LastName: 'Monasakthi', Salary: 10000, DOB: '06/08/2001', Email: 'sanjanamona@gmail.com'},
      {EmployeeID: 4, FirstName: 'Aarthi', LastName: 'Raj', Salary: 7000, DOB: '06/06/2001', Email: 'aarthi@gmail.com'},
      {EmployeeID: 5, FirstName: 'Bala', LastName: 'Chandru', Salary: 9000, DOB: '18/10/2001', Email: 'balachandru@gmail.com'},
      {EmployeeID: 6, FirstName: 'Arun', LastName: 'Kumar', Salary: 8500, DOB: '16/02/2001', Email: 'arun@gmail.com'},
      {EmployeeID: 7, FirstName: 'Subu', LastName: 'Lakshmi', Salary: 6000, DOB: '02/11/2001', Email: 'subulakshmi@gmail.com'},
      {EmployeeID: 8, FirstName: 'Naveen', LastName: 'Kumar', Salary: 11000, DOB: '02/12/2001', Email: 'naveenkumar@gmail.com'},
      {EmployeeID: 9, FirstName: 'Karthick', LastName: 'roa', Salary: 8000, DOB: '07/02/2001', Email: 'ajayroa@gmail.com'},
      {EmployeeID: 10, FirstName: 'Kali', LastName: 'das', Salary: 9000, DOB: '17/09/2001', Email: 'kalidas@gmail.com'}  
    ]
  }

  EditEmp(){
    this.showEdit = true;
  }
  UpdateEmp(){
    this.showEdit = false;
  }
}
