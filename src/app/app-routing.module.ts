import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CourrierComponent } from './components/courrier/courrier.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"etudiants",component:EtudiantsComponent},
  {path:"courriers",component:CourrierComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


