import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Evenement } from 'src/app/models/evenement';
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  evemenetsListe : any;
  evenementDetail : any = null;
  evenementNouveau : Evenement = new Evenement();

  eventTmp : any;
  uploadForm: any ; 
  constructor(private formBuilder: FormBuilder, private service : EvenementService) { 
  }

  ngOnInit(): void {
    this.getEvenemets();

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  getEvenemets(){
    this.service.getEvenements()
    .subscribe(evemenets => this.evemenetsListe = evemenets)
  }

  deleteEvenemet(even : any){
    this.service.deleteEvenement(even.id)
    .subscribe(() => {
      this.evemenetsListe = this.evemenetsListe.filter((evenement: { id: number; })=> evenement.id != even.id)
    });
  }

  afficherDetail(even : any){
    this.evenementDetail = even;
  }

  ajouterEvenemet(){


   const formData = new FormData();
   formData.append('file', this.uploadForm.get('profile').value);
      
   this.service.upPic(formData).subscribe()


    
     this.evenementNouveau.image_url = this.uploadForm.get('profile').value.name;
      this.service.addEvenement(this.evenementNouveau)
      .subscribe((even) => {
        this.evemenetsListe = [even, ...this.evemenetsListe];
    })

    
    this.eventTmp.srcElement.value = null;

    this.evenementNouveau = new Evenement();

  }

  onFileChanged(event : any) {
    this.eventTmp = event;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }

  }

  reset(){
    this.eventTmp.srcElement.value = null;

    this.evenementNouveau = new Evenement();
  }

}
