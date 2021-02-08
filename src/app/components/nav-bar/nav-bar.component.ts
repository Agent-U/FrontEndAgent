import { Component, OnInit ,Input} from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  estFerme : any;

@Input() nbRdvPris: number = 0;
@Input() nbNewIncidents: number = 0;

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    
    this.getIsClose();
  }


  switchOuvertFerme(){
    let resp = this.agentService.isCloseSwitch();
    resp.subscribe((data)=>this.estFerme=data);
    this.estFerme = !this.estFerme;
  }



public getIsClose(){
  
  let resp = this.agentService.isClose();
  resp.subscribe((data)=>this.estFerme=data);
}



}
