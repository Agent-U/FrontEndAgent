import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RendezVous } from '../models/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  apiUrl= "api/rendezVous/";

  constructor(private http: HttpClient) { }


  findAll(){
    return this.http.get<RendezVous[]>(`${this.apiUrl}`);
  }


   persist(rdv: any){
    return this.http.post<RendezVous>(this.apiUrl, rdv);
  }


  delete(id : any){
    return this.http.delete(`${this.apiUrl}delete/${id}`);
  }
}
