import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {

  constructor() { }

  @Input('data') nuevo: Personaje = {nombre: '', poder: 0} ;
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if( this.nuevo.nombre.trim().length === 0 ){ return;}
      this.onNuevoPersonaje.emit(this.nuevo);    
      this.nuevo = {nombre: '', poder:0};
  }

}
