import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants: Etudiant[] = [];


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
    .subscribe(etus => this.etudiants = etus)
  }

  deleteEtudiant(ine : any){
    this.etudiantService.delete(ine)
    .subscribe(() => {
      this.etudiants = this.etudiants.filter(etudiant => etudiant.ine != ine)
    })
  }

  persistEtudiant(){
    this.etudiantService.persist(this.mEtudiant)
    .subscribe((etu) => {
        this.etudiants = [etu, ...this.etudiants];
        this.resteEtudiant();
    })
  }

  editEtudiant(etu : any){
    this.mEtudiant.ine = etu.ine;
    this.mEtudiant.nom = etu.nom;
    this.mEtudiant.prenom = etu.prenom;
    this.mEtudiant.mail = etu.mail;
    this.mEtudiant.motDePasse = etu.motDePasse;
    this.mEtudiant.petiteEnveloppe = etu.petiteEnveloppe;
    this.mEtudiant.grandeEnveloppe = etu.grandeEnveloppe;
    this.mEtudiant.avisPassage = etu.avisPassage;
    this.mEtudiant.colis = etu.colis;
    this.mEtudiant.dateColis = etu.dateColis;
    this.mEtudiant.chambre = etu.chambre;
  }

  updateEtudiant(){
    this.etudiantService.update(this.mEtudiant)
    .subscribe((etu) => {
      this.resteEtudiant();
    })
  }


  resteEtudiant(){
    this.mEtudiant = {
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
  }



}
