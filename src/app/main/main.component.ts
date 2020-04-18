import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tabIndex = 0;
  apps = [
    {
      icon: 'assets/img/gm-icon.png',
      title: 'Games Master',
      subtitle: 'Angular',
      image: 'assets/img/screengm.png',
      content: 'Application web jouable sur navigateur regroupant plusieurs jeux de sociétés comme le morpion ou encore le puissance 4.',
      buttonColor: 'accent',
      link: 'https://adem-m.github.io/games-master/',
      ghlink: '',
      buttonText: 'Jouer',
      version: '',
      os: '',
      size: '',
      format: '',
      expanded: false,
    },
    {
      icon: 'assets/img/mastermind-icon.png',
      title: 'Mastermind',
      subtitle: 'C++',
      image: 'assets/img/screenmastermind.png',
      content: 'Version numérique du célèbre jeu de plateau. Il est toujours question ici de trouver une combinaison secrète composée de 4 couleurs. En revanche, celle-ci n\'est pas déterminée par un joueur mais générée aléatoirement par mon programme.',
      buttonColor: 'primary',
      link: 'assets/mastermind.rar',
      ghlink: 'https://github.com/adem-m/MastermindGUI',
      buttonText: 'Télécharger',
      version: '1.0',
      os: 'Windows 7/8/10',
      size: '9,11 Mo',
      format: '.rar',
      expanded: false,
    },
    {
      icon: 'assets/img/pg-icon.png',
      title: 'Générateur de mot de passe',
      subtitle: 'C++',
      image: 'assets/img/screenpassgen.png',
      content: 'Petit logiciel permettant la génération de mots de passe sécurisés. Plusieurs fonctionnalités y sont disponibles telles que le choix du nombre de caractères et la possibilité d\'enregistrer les mots de passe générés.',
      buttonColor: 'primary',
      link: 'assets/passwordgenerator.rar',
      ghlink: 'https://github.com/adem-m/PasswordGenerator',
      buttonText: 'Télécharger',
      version: '1.0',
      os: 'Windows 7/8/10',
      size: '11,0 Mo',
      format: '.rar',
      expanded: false,
    },
    {
      icon: 'assets/img/file-icon.png',
      title: 'File d\'attente',
      subtitle: 'C++',
      image: 'assets/img/screenfile.png',
      content: 'Projet de fin de BTS, ce logiciel est capable d\'afficher et de gérer une file d\'attente pour les requêtes du "Robot Charly". Celles-ci sont transmises par Bluetooth via une tablette Android puis exécutées les unes après les autres et stockeés dans une base de données SQLite.',
      buttonColor: 'primary',
      link: 'assets/filedattente.rar',
      ghlink: 'https://github.com/adem-m/File-d-attente',
      buttonText: 'Télécharger',
      version: '1.0',
      os: 'Windows 7/8/10',
      size: '11,7 Mo',
      format: '.rar',
      expanded: false,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goDlTab(i) {
    for (let app of this.apps) {
      app.expanded = false;
    }
    this.apps[i].expanded = true;
    this.tabIndex = 1;
  }

}