import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';
import { CapituloComponent } from './pages/capitulo/capitulo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    PersonajesComponent,
    CapitulosComponent,
    CapituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
