import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { PersonajesComponent} from './pages/personajes/personajes.component';
import { PersonajeComponent} from './pages/personaje/personaje.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';
import { CapituloComponent } from './pages/capitulo/capitulo.component';

const routes: Routes = [
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeComponent },
  { path: 'capitulos', component: CapitulosComponent },
  { path: 'capitulo/:id', component: CapituloComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'personajes' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
