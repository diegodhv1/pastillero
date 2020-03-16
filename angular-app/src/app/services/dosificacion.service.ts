import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dosificacion } from '../models/Dosificacion';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class DosificacionService {

  /*[{
      dosis: 2,
      medicamento:{
        nombre: 'Losartan'
      },
      paciente:{
        nombre: 'Julio',
        edad: 81,
        sexo: 'M'
      },
      alarma:{
        dia: new Date('2020-03-14T17:37:35.000+00:00'),
        horaIngesta: new Date('2020-03-14T17:37:35.000+00:00'),
        sonido: '~/sound.mp3',
        volumen: 80
      },
      auditoria: {
        ingesta: true
      }
    },
    {
      dosis: 4,
      medicamento:{
        nombre: 'Dolex'
      },
      paciente:{
        nombre: 'Graciela',
        edad: 85,
        sexo: 'F'
      },
      alarma:{
        dia: new Date('2020-03-14T17:37:35.000+00:00'),
        horaIngesta: new Date('2020-03-14T17:37:35.000+00:00'),
        sonido: '~/sound.mp3',
        volumen: 45
      },
      auditoria: {
        ingesta: false
      }
    }]*/

  dosificacionesUrl:string = 'http://localhost:3000/api/dosificaciones';

  constructor(private http:HttpClient) { }

  getDosificaciones():Observable<Dosificacion[]> {
    return  this.http.get<Dosificacion[]>(this.dosificacionesUrl); 
  }

  updateDosificacion(dosificacion:Dosificacion):Observable<any> {
    const url = `${this.dosificacionesUrl}/${dosificacion._id}`;
    
    return this.http.put(url, dosificacion, httpOptions);
  }

  addDosificacion(dosificacion:Dosificacion) {   
    return this.http.post<Dosificacion>(`${this.dosificacionesUrl}/add`, dosificacion, httpOptions);
  }
}
