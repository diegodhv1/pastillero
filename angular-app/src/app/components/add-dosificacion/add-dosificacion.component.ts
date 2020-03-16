import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Medicamento } from 'src/app/models/Medicamento';
import { Paciente } from 'src/app/models/Paciente';
import { Alarma } from 'src/app/models/Alarma';
import * as moment from 'moment';

@Component({
  selector: 'app-add-dosificacion',
  templateUrl: './add-dosificacion.component.html',
  styleUrls: ['./add-dosificacion.component.css']
})
export class AddDosificacionComponent implements OnInit {
  @Output() addDosificacion: EventEmitter<any> = new EventEmitter();

  dosis:number = 0;
  medicamento:Medicamento = new Medicamento();
  paciente:Paciente = new Paciente();
  alarma:Alarma = new Alarma();

  moment:any = moment;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const dosificacion = {
      dosis: this.dosis,
      medicamento: this.medicamento,
      paciente: this.paciente,
      alarma: {
        dia: this.alarma.dia,
        horaIngesta: moment(this.alarma.horaIngesta, 'h:mm a').toDate(),
        sonido: this.alarma.sonido,
        volumen: this.alarma.volumen
      },
      auditoria: {ingesta: false}
    }

    this.addDosificacion.emit(dosificacion);
  }

}
