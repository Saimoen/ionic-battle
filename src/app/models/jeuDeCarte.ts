import { Carte } from "./carte";

export class JeuDeCartes {
    static readonly NB_COULEURS: number = 4;
    static readonly NB_VALEURS: number = 13;
    static readonly NB_CARTES = JeuDeCartes.NB_COULEURS * JeuDeCartes.NB_VALEURS;

    private cartes: Carte[];

    constructor() {
        this.cartes = [];
        for (let i = Carte.CARREAU; i <= Carte.TREFLE; i++) {
            for (let j = Carte.AS; j <= Carte.ROI; j++) {
                this.cartes.push(new Carte(i, j));
            }
        }
        this.melanger();
    }

    melanger() {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];
        }
    }

    distribuer(): [Carte[], Carte[]] {
        const milieu = Math.floor(this.cartes.length / 2);
        return [this.cartes.slice(0, milieu), this.cartes.slice(milieu)];
    }
}