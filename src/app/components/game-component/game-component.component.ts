import { Component, OnInit } from '@angular/core';

import {
  faArrowRightFromBracket,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css'],
})
export class GameComponentComponent implements OnInit {
  highScore: number = this.getHighScoreData();
  score: number = this.getScoreData();
  state: string = 'STOP';

  redLight: number = 3000;
  greenLight =
    this.max(10000 - this.score * 100, 2000) - this.random(-1500, 1500);
  isLeft: boolean = true;

  faArrowRightFromBracket = faArrowRightFromBracket;
  faShoePrints = faShoePrints;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getHighScoreData();
    this.getScoreData();
    setInterval(() => {
      this.changeState();
    }, 3000);
  }

  max(a: number, b: number) {
    return Math.max(a, b);
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addPoint() {
    this.score++;
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.changeHighScore();
    this.changeScore();
    this.getHighScoreData();
    this.getScoreData();
  }

  removePoint() {
    this.score--;
    if (this.score < 0) {
      this.score = 0;
    }
    this.changeHighScore();
    this.changeScore();
    this.getHighScoreData();
    this.getScoreData();
  }

  checkLeft() {
    if(this.state === 'STOP') {
      this.score = 0;
    } else {
      if(this.isLeft) {
        this.addPoint();
        this.isLeft = false;
      } else {
        this.removePoint();
      }
    }
  }

  checkRight() {
    if(this.state === 'STOP') {
      this.score = 0;
    } else {
      if(!this.isLeft) {
        this.addPoint();
        this.isLeft = true;
      } else {
        this.removePoint();
      }
    }
  }

  // changeState() {
  //   if (this.state === 'RUN') {
  //     setTimeout(() => {
  //       this.state = 'STOP';
  //     }, this.greenLight);
  //   } else {
  //     setTimeout(() => {
  //       this.state = 'RUN';
  //     }, this.redLight);
  //   }
  // }

  changeState() {
    if (this.state === 'RUN') {
      this.state = 'STOP';
    } else {
      this.state = 'RUN';
    }
  }

  getScoreData() {
    let localStorageItem = JSON.parse(localStorage.getItem('players') || '[]');
    let item = localStorageItem.find(
      (item: { name: string }) => item.name === this.dataService.playerName
    );
    let sc = item.score;
    return sc;
  }

  getHighScoreData() {
    let localStorageItem = JSON.parse(localStorage.getItem('players') || '[]');
    let item = localStorageItem.find(
      (item: { name: string }) => item.name === this.dataService.playerName
    );
    let hs = item.maxScore;
    return hs;
  }

  changeScore() {
    let localStorageItem = JSON.parse(localStorage.getItem('players') || '[]');
    let item = localStorageItem.find(
      (item: { name: string }) => item.name === this.dataService.playerName
    );
    item.score = this.score;
    localStorage.setItem('players', JSON.stringify(localStorageItem));
  }

  changeHighScore() {
    let localStorageItem = JSON.parse(localStorage.getItem('players') || '[]');
    let item = localStorageItem.find(
      (item: { name: string }) => item.name === this.dataService.playerName
    );
    item.maxScore = this.highScore;
    localStorage.setItem('players', JSON.stringify(localStorageItem));
  }
  
}
