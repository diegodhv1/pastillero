import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosificacionesComponent } from './components/dosificaciones/dosificaciones.component';


const routes: Routes = [ 
  {path: '', component: DosificacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
