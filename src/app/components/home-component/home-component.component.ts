import { Component, OnInit } from '@angular/core';

import { Player } from '../../models/player'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  player: Player = {
    name: '',
    score: 0,
    maxScore: 0
  }

}
