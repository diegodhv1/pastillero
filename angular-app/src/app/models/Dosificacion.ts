import { Medicamento } from '../models/Medicamento';
import { Paciente } from '../models/Paciente';
import { Alarma } from '../models/Alarma';
import { Auditoria } from '../models/Auditoria';

export class Dosificacion {
    '_id':string;
    dosis:number;
    medicamento:Medicamento;
    paciente:Paciente;
    alarma:Alarma;
    auditoria:Auditoria
}