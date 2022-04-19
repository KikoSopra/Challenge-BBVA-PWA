import { Component, OnInit } from '@angular/core';

import { Player } from '../../models/player';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}

  player: Player = {
    name: '',
    score: 0,
    maxScore: 0,
  };

  addPlayer(name: HTMLInputElement) {
    this.gameService.addPlayer({
      name: name.value,
      score: 0,
      maxScore: 0,
    });
  }
}
