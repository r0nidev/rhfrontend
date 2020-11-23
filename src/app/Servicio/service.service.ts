import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // add by nl
import { Employee } from '../Modelo/Employee'; // add by nl

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8181/Rhbackend/employees';

  getEmployee(){
    // with this code, obtendremos all data this URL
    return this.http.get<Employee[]>(this.Url);
  }

  // method create employee
  createEmployee(employee:Employee){
    return this.http.post<Employee>(this.Url, employee);
  }
}
