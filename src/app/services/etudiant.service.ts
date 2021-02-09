import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  apiUrl= "api/etudiants/";

  constructor(private http: HttpClient) { }


  findAll(){
   return this.http.get<Etudiant[]>(`${this.apiUrl}`);
    
  }


  getEtudiant(ine : any){
    return this.http.get(`${this.apiUrl}delete/${ine}`);
  }



  

  delete(id : any){
    return this.http.delete(`${this.apiUrl}delete/${id}`);
  }


  persist(etudiant: any){
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }

  update(etudiant : any){
    return this.http.put(this.apiUrl, etudiant);
  }


}