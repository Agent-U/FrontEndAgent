import { RendezVous } from "./rendez-vous";

export interface Etudiant {
        ine: string;
        nom: string;
        prenom: string;
        mail: string;
        motDePasse: string;
        petiteEnveloppe: number;
        grandeEnveloppe: number;
        avisPassage: number;
        colis: number;
        chambre: string;

        datePetiteEnveloppe: any;
        dateGrandeEnveloppe: any;
        dateAvisPassage: any;
        dateColis: any;
        
}

