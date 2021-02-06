import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  evemenetsListe : any;
  evenementDetail : any = null;
  constructor(private service : EvenementService) { }

  ngOnInit(): void {
    this.getEvenemets();
  }

  getEvenemets(){
    this.service.getEvenements()
    .subscribe(evemenets => this.evemenetsListe = evemenets)
  }

  deleteEvenemet(even : any){
    this.service.deleteEvenement(even.id)
    .subscribe(() => {
      //this.listeRendezVous = this.listeRendezVous.filter((rendezVous: { id: number; })=> rendezVous.id != rendezVousDelete.id)
    });
  }

  afficherDetail(even : any){
    this.evenementDetail = even;
  }

}
