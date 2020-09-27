import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { PersonajesComponent} from './pages/personajes/personajes.component';
import { PersonajeComponent} from './pages/personaje/personaje.component';

const routes: Routes = [
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeComponent },
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
