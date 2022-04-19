import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { GameComponentComponent } from './components/game-component/game-component.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    GameComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
