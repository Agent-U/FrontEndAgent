import { RendezVous } from "./rendez-vous";

export interface Agent {

id?:number;
nom: string;
prenom: string;
rendezVous?: RendezVous[];
}
