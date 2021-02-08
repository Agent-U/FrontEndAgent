import { Component, OnInit} from '@angular/core';
import { RendezVous } from 'src/app/models/rendez-vous';
import { Agent } from 'src/app/models/agent';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import { AgentService } from 'src/app/services/agent.service';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {


  selectAgent: any;

  dateRdv: any;
  timeRdv: any;

  //sameAgent= false;
  tempAgent: any;
  
  filtreAffiche = -1;

  lesRendezVous: RendezVous[] = [];
  lesRendezVousCopie: RendezVous[] = []; //copie de la liste pour avoir toute la liste à coté au moment du filtre par agent


  lesAgents: Agent[] = [];

  mRdv: RendezVous = {
    id: null,
    date: "",
    motif:	"",
    disponible:	true,
    agent: null,
  }

  mAgent: Agent ={

    id: 0,
    nom: "",
    prenom: "",

  }

  constructor(private rendezVousService: RendezVousService, private agentService: AgentService) { }

  ngOnInit(): void {
    this.getAllRDV();
    this.getAllAgents();
  }


  getAllRDV(){
    this.rendezVousService.findAll()
    .subscribe(rdv => this.lesRendezVous = rdv);

   this.rendezVousService.findAll()
   .subscribe(rdv => this.lesRendezVousCopie = rdv);

   this.filtreAffiche = -1;
  }

  getAllAgents(){
    this.agentService.findAll()
    .subscribe(ag => this.lesAgents = ag)
  }

  rdvAgent(ag:Agent){
  this.tempAgent = ag;
  if(ag.id!= null){
    this.filtreAffiche = ag.id;
  }
  }


  persistRDV(){
    var dt = new Date(this.dateRdv+"T"+this.timeRdv+":00.000+00:00");
    this.mRdv.date=dt;
    this.mRdv.id = this.lesRendezVousCopie.length;

    this.mRdv.agent= this.mAgent;
    this.mRdv.agent.id = this.tempAgent.id;
    this.mRdv.agent.nom= this.tempAgent.nom;
    this.mRdv.agent.prenom= this.tempAgent.prenoom;
    this.tempAgent.rendezVous=this.mRdv;

    this.rendezVousService.persist(this.mRdv)
    .subscribe((etu) => {
        this.lesRendezVous = [etu, ...this.lesRendezVous];
    })
   
    this.getAllRDV();
    this.resetFormRDV()
    
  }

  persistAgent(){
    this.mAgent.id = this.lesAgents.length+1;
    this.agentService.persist(this.mAgent)
    .subscribe((etu) => {
        this.lesAgents = [etu, ...this.lesAgents];
    })

    this.resetFormAgent();
  }


  updateAgent(){
    this.agentService.update(this.tempAgent)
    .subscribe((etu) => {
      
    })
  }


  deleteRDV(id : any){
    if(confirm("Confirmez vous la suppression de ce rendez-vous?")) {
      this.rendezVousService.delete(id)
      .subscribe(() => {
        this.lesRendezVous = this.lesRendezVous.filter(rdv => rdv.id != id)
      })
    }
  }


  resetFormRDV(){
    this.selectAgent = "init";
    this.mAgent.nom="";
    this.mAgent.prenom="";
    this.dateRdv = null;
    this.timeRdv = null;
  }

  resetFormAgent(){
    this.mAgent.nom="";
    this.mAgent.prenom="";
  }

  aDesRDV(ag : Agent){
    if(ag.rendezVous != null){
      return ag.rendezVous.length==0;
    }
    return true;
  }

  deleteAgent(id : any){
    if(confirm("La suppression d'un agent est irréversible.\nVoulez vous continuer? ")) {
      this.agentService.delete(id)
      .subscribe(() => {
        this.lesAgents = this.lesAgents.filter(agent => agent.id != id)
      })
    }
  }
  
}
