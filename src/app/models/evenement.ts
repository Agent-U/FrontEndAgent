export class Evenement {
        public titre: string;
        public image_url: string;
        public detail: string;

        constructor(
                titre: string ="",
                image_url: string = "",
                detail: string = ""
            ){
                    this.titre = titre;
                    this.detail = detail;
                    this.image_url = image_url;
            }
}

