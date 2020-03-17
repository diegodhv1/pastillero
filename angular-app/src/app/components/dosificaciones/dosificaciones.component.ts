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
    this.dosificacionService.addDosificacion(dosificacion).subscribe(d => {
      console.log(d);
      
      this.dosificaciones.push(d);
    });

  }

  deleteDosificacion(dosificacion:Dosificacion) {
    this.dosificaciones = this.dosificaciones.filter(d => d._id !== dosificacion._id);
    this.dosificacionService.deleteDosificacion(dosificacion).subscribe(d => console.log(d));
  }

}
