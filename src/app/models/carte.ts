export class Carte {
    private _valeur: number;
    private _couleur: number;

    static readonly CARREAU: number = 1;
    static readonly PIQUE: number = 2;
    static readonly COEUR: number = 3;
    static readonly TREFLE: number = 4;

    static readonly AS: number = 1;
    static readonly DEUX: number = 2;
    static readonly TROIS: number = 3;
    static readonly QUATRE: number = 4;
    static readonly CINQ: number = 5;
    static readonly SIX: number = 6;
    static readonly SEPT: number = 7;
    static readonly HUIT: number = 8;
    static readonly NEUF: number = 9;
    static readonly DIX: number = 10;
    static readonly VALET: number = 11;
    static readonly DAME: number = 12;
    static readonly ROI: number = 13;

    constructor(couleur: number, valeur: number) {
        if (!Carte.isValidCouleur(couleur)) throw new Error("Cette couleur n'existe pas :" + couleur);
        if (!Carte.isValidValeur(valeur)) throw new Error("Cette valeur de carte n'existe pas.");
        
        this._couleur = couleur;
        this._valeur = valeur;
    }

    get couleur(): number { return this._couleur; }
    get valeur(): number { return this._valeur; }

    public toStringCouleur(couleur: number): string {
        switch (couleur) {
            case Carte.CARREAU: return "Carreau";
            case Carte.PIQUE: return "Pique";
            case Carte.COEUR: return "Coeur";
            case Carte.TREFLE: return "Trèfle";
            default: return "";
        }
    }

    public toStringValeur(valeur: number): string {
        switch (valeur) {
            case Carte.AS: return "As";
            case Carte.DEUX: return "Deux";
            case Carte.TROIS: return "Trois";
            case Carte.QUATRE: return "Quatre";
            case Carte.CINQ: return "Cinq";
            case Carte.SIX: return "Six";
            case Carte.SEPT: return "Sept";
            case Carte.HUIT: return "Huit";
            case Carte.NEUF: return "Neuf";
            case Carte.DIX: return "Dix";
            case Carte.VALET: return "Valet";
            case Carte.DAME: return "Dame";
            case Carte.ROI: return "Roi";
            default: return "";
        }
    }

    static isValidCouleur(couleur: number): boolean {
        return Number.isInteger(couleur) && Carte.CARREAU <= couleur && couleur <= Carte.TREFLE;
    }

    static isValidValeur(valeur: number): boolean {
        return Number.isInteger(valeur) && Carte.AS <= valeur && valeur <= Carte.ROI;
    }
}