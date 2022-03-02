import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game = new Game();
  pickCardAnimation = false;
  currentCard: string = "";
  //name: string = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  takeCard(){

    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop()!;
      this.pickCardAnimation = true
      
  
      setTimeout(() => {
        this.pickCardAnimation = false
        this.game.playedCards.push(this.currentCard);
        this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;
      }, 2000);  
    }

    
    
  }

  addPlayer(name: string){
    this.game.players.push(name)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.addPlayer(name)
      }
      
      
    });
  }

}
