import { Component } from '@angular/core';
import { RendezVous } from 'src/app/models/rendez-vous';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndAgent';


  lesRendezVous: RendezVous[] = [];
  lesIcidents: any =[];

  tailleRdv:number = this.lesRendezVous.length;
  tailleIncidents = this.lesIcidents.length;
  constructor(private rendezVousService: RendezVousService, private incidentService : IncidentService) { }

  ngOnInit(): void {
    this.getAllRDV();
    this.getAllIncidents();
  }


  getAllRDV(){
    this.rendezVousService.findAll()
    .subscribe(rdv => this.lesRendezVous = rdv);
  }


  getAllIncidents(){
    let resp = this.incidentService.getAllIncident();
    resp.subscribe((data)=>this.lesIcidents=data);
  }

  countElem(){
    var count = 0;
    for(var i = 0; i < this.lesRendezVous.length; ++i){
        if(this.lesRendezVous[i].disponible != true){
            count++;
        }   
    }
    return count;
  }

  countIncidents(){
    var count = 0;
    for(var i = 0; i < this.lesIcidents.length; ++i){
        if(this.lesIcidents[i].etat===0){
            count++;
        }
    }
    return count;
  }



  
}

