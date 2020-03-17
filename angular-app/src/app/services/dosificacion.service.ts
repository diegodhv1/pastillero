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

  dosificacionesUrl:string = 'http://localhost:3000/api/dosificaciones';

  constructor(private http:HttpClient) { }

  getDosificaciones():Observable<Dosificacion[]> {
    return  this.http.get<Dosificacion[]>(this.dosificacionesUrl); 
  }

  updateDosificacion(dosificacion:Dosificacion):Observable<any> {
    const url = `${this.dosificacionesUrl}/${dosificacion._id}`;
    return this.http.put(url, dosificacion, httpOptions);
  }

  addDosificacion(dosificacion:Dosificacion):Observable<Dosificacion> {   
    return this.http.post<Dosificacion>(`${this.dosificacionesUrl}/add`, dosificacion, httpOptions);
  }

  deleteDosificacion(dosificacion:Dosificacion):Observable<Dosificacion> {
    const url = `${this.dosificacionesUrl}/${dosificacion._id}`;
    return this.http.delete<Dosificacion>(url, httpOptions);   
  }
}
