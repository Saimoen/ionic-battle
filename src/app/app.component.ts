import { Component } from '@angular/core';
import { JeuService } from './services/jeu.service';
import { Carte } from './models/carte';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mainJoueur1!: Carte[];
  mainJoueur2!: Carte[];
  resultatTour!: string;
  jeuTermine!: boolean;

  constructor(private jeuService: JeuService) {
    this.recommencerJeu();
  }

  jouerTour() {
    if (this.jeuTermine) return;

    this.resultatTour = this.jeuService.jouerTour();
    this.mainJoueur1 = this.jeuService.getMainJoueur1();
    this.mainJoueur2 = this.jeuService.getMainJoueur2();

    if (this.mainJoueur1.length === 0 || this.mainJoueur2.length === 0) {
      this.jeuTermine = true;
    }
  }

  recommencerJeu() {
    this.jeuService.reinitialiserJeu();
    this.mainJoueur1 = this.jeuService.getMainJoueur1();
    this.mainJoueur2 = this.jeuService.getMainJoueur2();
    this.resultatTour = '';
    this.jeuTermine = false;
  }
}
