import { Component, OnInit } from '@angular/core';
import { Dosificacion } from '../../models/Dosificacion';
import { DosificacionService } from '../../services/dosificacion.service';

@Component({
  selector: 'app-dosificaciones',
  templateUrl: './dosificaciones.component.html',
  styleUrls: ['./dosificaciones.component.css']
})
export class DosificacionesComponent implements OnInit {

  dosificaciones:Dosificacion[];

  constructor(private dosificacionService:DosificacionService) { }

  ngOnInit() {
    this.dosificacionService.getDosificaciones().subscribe(dosificaciones => {
      this.dosificaciones = dosificaciones;
    });
  }

  addDosificacion(dosificacion:Dosificacion) {
    this.dosificacionService.addDosificacion(dosificacion).subscribe(dosificacion => {
      this.dosificaciones.push(dosificacion);
    });
  }

}
