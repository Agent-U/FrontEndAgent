import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
export class EvenementService {

  constructor(private http:HttpClient) { }

  public getEvenements(){
    return this.http.get("/api/evenements/",optionRequete);
 
  }
  

  public addEvenement(evenement:any){
    return this.http.post("/api/evenements/",evenement,optionRequete);
  }  


  public deleteEvenement(id:number){
    return this.http.delete("/api/evenements/delete/"+id,optionRequete);
  } 
  
  public upPic(file:any){
    return this.http.post<any>("/api/evenements/upImg/",file,optionRequete);
  } 

  public uploadImage(file:any){
    alert("here");
     return this.http.delete("/api/evenements/delete/"+2,optionRequete);
    //return this.http.post("/evenements/upImg",file,optionRequete);
  } 


}
