import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dosificacion } from '../../models/Dosificacion';
import { DosificacionService } from 'src/app/services/dosificacion.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dosificacion-item',
  templateUrl: './dosificacion-item.component.html',
  styleUrls: ['./dosificacion-item.component.css']
})
export class DosificacionItemComponent implements OnInit {

  @Input() dosificacion: Dosificacion;
  @Output() deleteDosificacion: EventEmitter<Dosificacion> = new EventEmitter();

  moment:any = moment;

  constructor(private dosificacionService:DosificacionService) { }

  ngOnInit() {
  }

  // Set Classes
  setClasses() {
    let classes = {
      dosificacion: true,
      ingesta: false
    }

    return classes;
  }

  onUpdate(dosificacion) {
    this.dosificacionService.updateDosificacion(dosificacion).subscribe(d => {
      console.log(d);
    });
  }

  onDelete(dosificacion) {
    this.deleteDosificacion.emit(dosificacion);
  }

}
