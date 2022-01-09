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
}

let card1 = new Card("♦︎", "A", 1);
console.log(card1);
console.log(card1.getCardString());

let deck1 = new Deck();
console.log(deck1);

// コンソールで確認
console.log(deck1.deck);
console.log(deck1.deck[3]);
console.log(deck1.deck[3].getCardString());
