import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


import {HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortDirective } from './directive/sort.directive';
import { ReactiveFormsModule} from '@angular/forms';
import { CourrierComponent } from './components/courrier/courrier.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EtudiantsComponent,
    SortDirective,
    CourrierComponent,
    AccueilComponent,
    RendezVousComponent

    
    

    
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
