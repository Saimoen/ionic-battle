import { Injectable } from '@angular/core';
import { Carte } from '../models/carte';
import { JeuDeCartes } from '../models/jeuDeCarte';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  private jeu!: JeuDeCartes;
  private mainJoueur1!: Carte[];
  private mainJoueur2!: Carte[];

  constructor() {
    this.reinitialiserJeu();
  }

  reinitialiserJeu() {
    this.jeu = new JeuDeCartes();
    [this.mainJoueur1, this.mainJoueur2] = this.jeu.distribuer();
  }

  getMainJoueur1(): Carte[] {
    return this.mainJoueur1;
  }

  getMainJoueur2(): Carte[] {
    return this.mainJoueur2;
  }

  jouerTour(): string {
    if (this.mainJoueur1.length === 0 || this.mainJoueur2.length === 0) {
      return this.getGagnant();
    }

    const carteJoueur1 = this.mainJoueur1.shift();
    const carteJoueur2 = this.mainJoueur2.shift();

    if (!carteJoueur1 || !carteJoueur2) {
      return this.getGagnant();
    }

    let result: string;
    if (carteJoueur1.valeur > carteJoueur2.valeur) {
      this.mainJoueur1.push(carteJoueur1, carteJoueur2);
      result = `Joueur 1 gagne ce tour avec ${carteJoueur1.toStringValeur(carteJoueur1.valeur)} de ${carteJoueur1.toStringCouleur(carteJoueur1.couleur)} contre ${carteJoueur2.toStringValeur(carteJoueur2.valeur)} de ${carteJoueur2.toStringCouleur(carteJoueur2.couleur)}`;
    } else if (carteJoueur1.valeur < carteJoueur2.valeur) {
      this.mainJoueur2.push(carteJoueur1, carteJoueur2);
      result = `Joueur 2 gagne ce tour avec ${carteJoueur2.toStringValeur(carteJoueur2.valeur)} de ${carteJoueur2.toStringCouleur(carteJoueur2.couleur)} contre ${carteJoueur1.toStringValeur(carteJoueur1.valeur)} de ${carteJoueur1.toStringCouleur(carteJoueur1.couleur)}`;
    } else {
      this.mainJoueur1.push(carteJoueur1);
      this.mainJoueur2.push(carteJoueur2);
      result = `Égalité avec ${carteJoueur1.toStringValeur(carteJoueur1.valeur)} de ${carteJoueur1.toStringCouleur(carteJoueur1.couleur)} et ${carteJoueur2.toStringValeur(carteJoueur2.valeur)} de ${carteJoueur2.toStringCouleur(carteJoueur2.couleur)}`;
    }

    if (this.mainJoueur1.length === 0 || this.mainJoueur2.length === 0) {
      result += '\n' + this.getGagnant();
    }

    return result;
  }

  private getGagnant(): string {
    if (this.mainJoueur1.length > this.mainJoueur2.length) {
      return 'Joueur 1 a gagné la partie !';
    } else if (this.mainJoueur1.length < this.mainJoueur2.length) {
      return 'Joueur 2 a gagné la partie !';
    } else {
      return 'Égalité parfaite !';
    }
  }
}
