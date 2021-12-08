import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor'];
  heroeBorado: string = "";

  borrarHeroe()
  {
    
    const hero = this.heroes.shift()|| '';
    this.heroeBorado =  hero;
    console.log("Borrando...");
  }

}
