import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

 
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
 

 
  
  ngOnInit(): void {}
  constructor() {
  }

}
