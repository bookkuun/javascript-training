class Card {
  constructor(suit, value, intValue) {
    this.suit = suit;
    this.value = value;
    this.intValue = intValue;
  }

  //インスタンス化されたカード情報を返す関数
  getCardString() {
    return this.suit + this.value + "(" + this.intValue + ")";
  }
}

class Deck {
  constructor() {
    this.deck = Deck.generateDeck();
  }

  static generateDeck() {
    let newDeck = [];
    const suits = ["♣", "♦", "♥", "♠"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        newDeck.push(new Card(suits[i], values[j], j + 1));
      }
    }

    return newDeck;
  }

  draw() {
    return this.deck.pop();
  }

  printDeck() {
    console.log("Displaying cards...");
    for (let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i].getCardString());
    }
  }

  shuffleDeck() {
    let deckSize = this.deck.length;
    for (let i = deckSize - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }
}

//ディーラー
class Dealer {
  static startGame(amountOfPlayers, gameMode) {
    //卓の情報
    let table = {
      players: [],
      gameMode: gameMode,
      deck: new Deck(),
    };

    //シャッフル
    table["deck"].shuffleDeck();

    for (let i = 0; i < amountOfPlayers; i++) {
      // プレイヤーの手札
      let playerCard = [];

      for (let j = 0; j < Dealer.initialCards(gameMode); j++) {
        playerCard.push(table["deck"].draw());
      }
      table["players"].push(playerCard);
    }

    return table["players"];
  }

  static initialCards(gameMode) {
    if (gameMode === "poker") return 5;
    if (gameMode === "21") return 2;
  }
}

let table1 = Dealer.startGame(3, "21");
console.log(table1);

let table2 = Dealer.startGame(4, "poker");
console.log(table2);
