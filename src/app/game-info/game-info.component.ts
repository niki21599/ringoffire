import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    {title: "Waterfall", description: "Starting with the player who drew the card, every player has to continually drink their drink. You can only stop when the person to their right has stopped drinking."},
    {title: "You", description: "You decide who drinks. "},
    {title: "Me", description: "Congrats! Drink a shot!"},
    {title: "Category", description: "Come up with a category. Each player must enumerate one item from the category."},
    {title: "Bust a jive", description: "Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. "},
    {title: "Chicks", description: "All girls drink. "},
    {title: "Heaven", description: "Put your hands up! The last Player drinks. "},
    {title: "Mate", description: "Pick a mate. Your mate must always drink when you drink and the other way around."},
    {title: "Thumbmaster", description: "Put your thumb on the table! The last Player drinks. "},
    {title: "Men", description: " All men drink. "},
    {title: "Quizmaster", description: "You become the question master, and if anybody answers a question asked by you, they have to drink."},
    {title: "Never have I ever... ", description: "Say something you never did. Everyone who did it has to drink."},
    {title: "Rule", description: "Make a rule. Everyone needs to drink when he breaks the rule. "},
    
    


  ]

  title: string = "Start";
  description: string = " Fügt alle Spieler hinzu und lasset die Trinkspiele beginnen";
  @Input() card: string = ""

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void{
    if (this.card !== "") {
      let cardNumber = +this.card.split("_")[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
    
  }

}
