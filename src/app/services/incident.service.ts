import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST, GET',
    'Access-Control-Allow-Headers':'X-PINGOTHER, Content-Type'
  })
};

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) { }

  public getAllIncident(){
    return this.http.get("api/incidents/",optionRequete);
     
  }
 
  public getIncidentById(id : number){
    return this.http.get("api/incidents/"+id,optionRequete);
     
  }
 
  public updateIncident(incident : any){
    return this.http.put("api/incidents/",incident,optionRequete)
  }
}
