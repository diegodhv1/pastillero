import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DosificacionService } from './services/dosificacion.service';
import { DosificacionesComponent } from './components/dosificaciones/dosificaciones.component';
import { DosificacionItemComponent } from './components/dosificacion-item/dosificacion-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddDosificacionComponent } from './components/add-dosificacion/add-dosificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    DosificacionesComponent,
    DosificacionItemComponent,
    HeaderComponent,
    AddDosificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DosificacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
