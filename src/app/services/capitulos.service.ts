import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapituloModel } from '../models/capitulo.model';
import { map, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CapitulosService {

  constructor(private http: HttpClient) {

   }

   obtenerCapitulo( id:string ){
    return this.http.get(`${ environment.rickandmortyapi }/episode/${ id }`);
  }

  obtenerCapitulos(){
    return this.http.get(`${ environment.rickandmortyapi }/episode`)
    .pipe(
      map( resp => this.crearArreglo( resp )),
      delay(1500)
    );
  }

  private crearArreglo( capituloObj: object ){
    
    const capitulos : any[] = [];

    if(capituloObj == null){ return [];}

    Object.keys( capituloObj).forEach( key=>{
      const capitulo: CapituloModel = capituloObj[key];
      capitulo.id = key;

      capitulos.push( capitulo );
    })

    return capitulos;
  }
}
