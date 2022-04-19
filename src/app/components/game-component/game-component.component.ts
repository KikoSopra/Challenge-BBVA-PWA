import { Component, OnInit } from '@angular/core';

import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {

  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor() { }

  ngOnInit(): void {
  }

}
