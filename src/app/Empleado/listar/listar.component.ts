import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Modelo/Employee';
import { ServiceService } from '../../Servicio/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  employees:Employee[];
  // hacemos referencia al servicio
  constructor(private service:ServiceService, private router:Router) { }

  // MAIN method
  ngOnInit(): void {
    this.service.getEmployee()
    .subscribe(data => {
      this.employees = data;
    })
  }

}
