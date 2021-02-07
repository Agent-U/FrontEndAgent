import { Component } from '@angular/core';
import { RendezVous } from 'src/app/models/rendez-vous';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndAgent';


  lesRendezVous: RendezVous[] = [];
  lesRendezVousNotif: RendezVous[] = [];
  tailleRdv:number = this.lesRendezVous.length;
  constructor(private rendezVousService: RendezVousService) { }

  ngOnInit(): void {
    this.getAllRDV();
    
  }


  getAllRDV(){
    this.rendezVousService.findAll()
    .subscribe(rdv => this.lesRendezVous = rdv);
  }

  countElem(){
    var count = 0;
    for(var i = 0; i < this.lesRendezVous.length; ++i){
        if(this.lesRendezVous[i].disponible != true){
            count++;
            this.lesRendezVousNotif.push(this.lesRendezVous[i]);
        }
    }
    return count;
  }


  
}

