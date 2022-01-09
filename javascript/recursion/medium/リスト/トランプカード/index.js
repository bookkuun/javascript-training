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

  printDeck() {
    console.log("Displaying cards...");
    for (let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i].getCardString());
    }
  }
}

let deck1 = new Deck();
deck1.printDeck();

//カードのシャッフル
//Math.random --- 0以上1未満のランダムな数
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

let intArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = intArr.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  // jというランダムな数字とiの位置にある数字を交換を繰り返している
  // temporary(仮)の意味
  // i番目をtempに保存し、i番目をj番目で更新し、j番目をtempで更新します。
  let temp = intArr[i];
  intArr[i] = intArr[j];
  intArr[j] = temp;
}

console.log(intArr);
