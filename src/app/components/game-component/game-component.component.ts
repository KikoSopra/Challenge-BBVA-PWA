import { Component, OnInit } from '@angular/core';

import { faArrowRightFromBracket, faShoePrints } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {

  highScore: number = this.getHighScoreData();
  score: number = this.getScoreData();
  state: string = 'RUN';

  faArrowRightFromBracket = faArrowRightFromBracket;
  faShoePrints = faShoePrints;

  constructor() { }

  ngOnInit(): void {
  }

  addPoint() {
    this.score++;
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
  }

  removePoint() {
    this.score--;
    if (this.score < 0) {
      this.score = 0;
    }
  }

  changeState() {
    if (this.state === 'RUN') {
      this.state = 'PAUSE';
    } else {
      this.state = 'RUN';
    }
  }

  getScoreData() {
    let localStorageItem = JSON.parse(
      localStorage.getItem('players') || '[]'
    );
    let item = localStorageItem.find(
      (item: { name: string; }) => item.name === 'Luis'
    );
    let sc = item.score;
    return sc;
  }

  getHighScoreData(){
    let localStorageItem = JSON.parse(
      localStorage.getItem('players') || '[]'
    );
    let item = localStorageItem.find(
      (item: { name: string; }) => item.name === 'Luis'
    );
    let hs = item.maxScore;
    return hs;
  }

}
