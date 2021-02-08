import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from 'src/app/models/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  
  apiUrl= "api/agents/";


  constructor(private http: HttpClient) { }
  
  findAll(){
    return this.http.get<Agent[]>(`${this.apiUrl}`);
     
   }


   delete(id : any){
    return this.http.delete(`${this.apiUrl}delete/${id}`);
  }


  persist(agent: any){
    return this.http.post<Agent>(this.apiUrl, agent);
  }

  update(agent : any){
    return this.http.put(this.apiUrl, agent);
  }


  isClose(){
    return this.http.get(`${this.apiUrl}isClose`);
  }

  isCloseSwitch(){
    return this.http.get(`${this.apiUrl}switch`);
  }


}






