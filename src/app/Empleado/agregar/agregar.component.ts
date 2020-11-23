import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // added 
import { Employee } from 'src/app/Modelo/Employee';
import { ServiceService } from 'src/app/Servicio/service.service'; //

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(employee:Employee){
    this.service.createEmployee(employee)
    .subscribe(data => {
      alert("Se agregó with success !!");
      this.router.navigate("listar"); // redireccionamos in our table list
    })
  }
}
