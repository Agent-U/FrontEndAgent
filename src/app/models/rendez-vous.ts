import { EtudiantsComponent } from "../components/etudiants/etudiants.component"
import { Agent } from "./agent";
import { Etudiant } from "./etudiant";


export interface RendezVous {

id?: any;
date: any;
motif:	String;
disponible:	true;
agent: any;

etudiant?: any;
}
