import { Component, OnInit } from '@angular/core';
import { CapitulosService } from '../../services/capitulos.service';
import { PersonajesService } from '../../services/personajes.service';
import { CapituloModel } from '../../models/capitulo.model';
import { PersonajeModel } from 'src/app/models/personaje.model';


@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styleUrls: ['./capitulo.component.css']
})
export class CapituloComponent implements OnInit {
  capitulos: CapituloModel[] = [];
  personajes = [];
  personaje: PersonajeModel[] = [];
  cargando = false ;
  
  constructor(public capitulosService:CapitulosService, public personajeService:PersonajesService) { }

  ngOnInit(): void {
    this.cargando = true;

    this.capitulosService.obtenerCapitulos()
    .subscribe( resp => {
      this.capitulos = resp[1];
      let total = this.capitulos.length;
      for (let index = 0; index < total; index++) {
        this.personajes = this.capitulos[index]['characters'];
        for (let j = 0; j < 1; j++) {
          let personaje1 = <string>this.personajes[Math.floor(Math.random() * this.personajes.length)];
          this.capitulos[index]['character'] = personaje1.split('/')[5];
        }
        this.personajeService.obtenerPersonaje( this.capitulos[index]['character'] )
        .subscribe( (resp: any) => {
          this.capitulos[index]['character'] = resp;
        });
      }
      this.cargando = false;
    });

  }

}
