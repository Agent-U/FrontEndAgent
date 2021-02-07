import { Component, OnInit ,Input} from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  estFerme = false;

@Input() nbRdvPris: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  switchOuvertFerme(){
    this.estFerme = !this.estFerme;
  }

}
