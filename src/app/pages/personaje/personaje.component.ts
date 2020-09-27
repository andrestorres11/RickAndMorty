import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonajeModel } from '../../models/personaje.model';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje = new PersonajeModel();

  constructor(private personajesService: PersonajesService,
                      private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.personajesService.obtenerPersonaje( id )
      .subscribe( (resp: any) => {
        
        this.personaje = resp;
        this.personaje.id = id;
      });
  }

}
