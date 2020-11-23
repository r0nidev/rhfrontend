import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Empleado/listar/listar.component';
import { AgregarComponent } from './Empleado/agregar/agregar.component';
import { EditarComponent } from './Empleado/editar/editar.component';
import { FormsModule } from '@angular/forms'; //
import { ServiceService } from '../app/Servicio/service.service'; // add service 
import { HttpClientModule } from '@angular/common/http'; // add also

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // add by me
    HttpClientModule // importamos
  ],
  providers: [ServiceService], // add here
  bootstrap: [AppComponent]
})
export class AppModule { }
