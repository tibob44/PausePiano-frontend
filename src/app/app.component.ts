import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cirtxt = [
    {
      title : 'Collaboratif',
      content : 'on explique le concept du site + lien vers le page présentation',
      lien: '#'
    },
    {
      title : 'A vous de jouer',
      content : 'on explique que les utilisateurs peuvent reporter un piano + lien vers soumettre un piano',
      lien: '#'
    },
    {
      title : 'Bénévole',
      content : 'on parle de nous xD + lien vers qui sommes nous',
      lien: '#'
    },
    {
      title : 'Carte',
      content : 'on explique le principe de la carte + lien vers la carte',
      lien: '#'
    }
  ];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

}
