import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {

  editCourrier: boolean[] = [];
 

  etudiants: Etudiant[] = [];

  etudiantsToCompareWith: Etudiant[] = [];

  mEtudiant: Etudiant ={
    ine: '',
    nom: '',
    prenom: '',
    mail: '',
    motDePasse: '',
    petiteEnveloppe: 0,
    grandeEnveloppe: 0,
    avisPassage: 0,
    colis: 0,
    chambre: '',
    datePetiteEnveloppe: '',
    dateGrandeEnveloppe: '',
    dateAvisPassage: '',
    dateColis: '',
  }


  constructor(private etudiantService: EtudiantService ) { }

  ngOnInit() {
    this.getEtudiants();

  }


  

  getEtudiants(){
    this.etudiantService.findAll()
    .subscribe(etus => this.etudiants = etus );

    this.etudiantService.findAll()
    .subscribe(etus => this.etudiantsToCompareWith = etus );
    
  }


  editEtudiant(etu : any, i: number){
    this.etudiants[i].ine = etu.ine;
    this.etudiants[i].nom = etu.nom;
    this.etudiants[i].prenom = etu.prenom;
    this.etudiants[i].mail = etu.mail;
    this.etudiants[i].motDePasse = etu.motDePasse;
    this.etudiants[i].petiteEnveloppe = etu.petiteEnveloppe;
    this.etudiants[i].grandeEnveloppe = etu.grandeEnveloppe;
    this.etudiants[i].avisPassage = etu.avisPassage;
    this.etudiants[i].colis = etu.colis;
    this.etudiants[i].chambre = etu.chambre;
    this.etudiants[i].datePetiteEnveloppe = etu.datePetiteEnveloppe;
    this.etudiants[i].dateGrandeEnveloppe = etu.dateGrandeEnveloppe;
    this.etudiants[i].dateAvisPassage = etu.dateAvisPassage;
    this.etudiants[i].dateColis = etu.dateColis;

  }


  updateEtudiant(i: number){
    var today = new Date();

    
    this.mEtudiant.ine = this.etudiants[i].ine;
    this.mEtudiant.nom = this.etudiants[i].nom;
    this.mEtudiant.prenom = this.etudiants[i].prenom;
    this.mEtudiant.mail = this.etudiants[i].mail;
    this.mEtudiant.motDePasse = this.etudiants[i].motDePasse;
    this.mEtudiant.petiteEnveloppe = this.etudiants[i].petiteEnveloppe;
    this.mEtudiant.grandeEnveloppe = this.etudiants[i].grandeEnveloppe;
    this.mEtudiant.avisPassage = this.etudiants[i].avisPassage;
    this.mEtudiant.colis = this.etudiants[i].colis;
    this.mEtudiant.chambre = this.etudiants[i].chambre;
    this.mEtudiant.datePetiteEnveloppe = this.etudiants[i].datePetiteEnveloppe;
    this.mEtudiant.dateGrandeEnveloppe = this.etudiants[i].dateGrandeEnveloppe;
    this.mEtudiant.dateAvisPassage = this.etudiants[i].dateAvisPassage;
    this.mEtudiant.dateColis = this.etudiants[i].dateColis;


    if(this.mEtudiant.grandeEnveloppe != this.etudiantsToCompareWith[i].grandeEnveloppe){
      this.mEtudiant.dateGrandeEnveloppe = today;
    }

    if(this.mEtudiant.petiteEnveloppe != this.etudiantsToCompareWith[i].petiteEnveloppe){
      this.mEtudiant.datePetiteEnveloppe = today;
    }
    
    if(this.mEtudiant.avisPassage != this.etudiantsToCompareWith[i].avisPassage){
      this.mEtudiant.dateAvisPassage = today;
    }
    if(this.mEtudiant.colis != this.etudiantsToCompareWith[i].colis){
      this.mEtudiant.dateColis = today;
    }

    this.etudiantService.update(this.mEtudiant)
    .subscribe((etu) => {
      this.DisplayToSaveBtn(i);
    })
  }

  updateEtudiantZeroCourrier(i: number){
    var today = new Date();

    this.mEtudiant.ine = this.etudiants[i].ine;
    this.mEtudiant.nom = this.etudiants[i].nom;
    this.mEtudiant.prenom = this.etudiants[i].prenom;
    this.mEtudiant.mail = this.etudiants[i].mail;
    this.mEtudiant.motDePasse = this.etudiants[i].motDePasse;
    this.mEtudiant.petiteEnveloppe = 0;
    this.mEtudiant.grandeEnveloppe = 0;
    this.mEtudiant.avisPassage = 0;
    this.mEtudiant.colis = 0;
    this.mEtudiant.chambre = this.etudiants[i].chambre;

    this.mEtudiant.dateGrandeEnveloppe = today;
    this.mEtudiant.datePetiteEnveloppe = today;
    this.mEtudiant.dateAvisPassage = today;
    this.mEtudiant.dateColis = today;

    this.etudiantService.update(this.mEtudiant)
    .subscribe((etu) => {
      this.etudiants[i].petiteEnveloppe = 0;
      this.etudiants[i].grandeEnveloppe = 0;
      this.etudiants[i].avisPassage = 0;
      this.etudiants[i].colis = 0;
    })

    //this.DisplaySaveBtn();

  }

  DisplaySaveBtn(ind: any){
    for (let i = 0; i < this.etudiants.length; i++) {
      this.editCourrier.push(false)
    }
    this.editCourrier[ind] = true;
    
  }

  DisplayToSaveBtn(ind: any){
    this.editCourrier[ind] = false;
    
  }




}
