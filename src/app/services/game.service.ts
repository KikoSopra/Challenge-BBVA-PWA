import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  players: Player[];

  constructor() {
    this.players = [];
  }

  addPlayer(player: Player) {
    if (localStorage.getItem('players') === null) {
      this.players.push(player);
      localStorage.setItem('players', JSON.stringify(this.players));
    } else {
      let localStorageItem = JSON.parse(
        localStorage.getItem('players') || '[]'
      );
      let item = localStorageItem.find(
        (item: Player) => item.name === player.name
      );
      if (!item) {
        this.players.push(player);
        localStorage.setItem('players', JSON.stringify(this.players));
      }
    }
  }
}
