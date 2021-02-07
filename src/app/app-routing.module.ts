import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CourrierComponent } from './components/courrier/courrier.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';

import { IncidentComponent } from ponents/incident/incident.component';
import { EvenementComponent } from './components/evenement/evenement.component';


const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"etudiants",component:EtudiantsComponent},
  {path:"courriers",component:CourrierComponent},
  {path:"rendezVous",component:RendezVousComponent},
  {path:"incidents",component:IncidentComponent}
  {path:"evenement",component:EvenementComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


