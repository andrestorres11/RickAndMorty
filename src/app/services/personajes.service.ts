import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonajeModel } from '../models/personaje.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private url = 'https://rickandmortyapi.com/api';

  constructor( private http: HttpClient) { }

  obtenerPersonaje( id:string ){
    return this.http.get(`${ this.url }/character/${ id }`);
  }

  obtenerPersonajes(){
    return this.http.get(`${ this.url }/character`)
    .pipe(
      map( resp => this.crearArreglo( resp )),
      delay(1500)
    );
  }

  private crearArreglo( personajesObj: object ){
    
    const personajes : any[] = [];

    if(personajesObj == null){ return [];}

    Object.keys( personajesObj).forEach( key=>{
      const personaje: PersonajeModel = personajesObj[key];
      personaje.id = key;

      personajes.push( personaje );
    })

    return personajes;
  }
}
