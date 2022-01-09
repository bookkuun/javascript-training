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
    let table = {
      players: [],
      gameMode: gameMode,
      deck: new Deck(),
    };

    table["deck"].shuffleDeck();

    for (let i = 0; i < amountOfPlayers; i++) {
      let playerCard = [];
      for (let j = 0; j < Dealer.initialCards(gameMode); j++) {
        playerCard.push(table["deck"].draw());
      }
      table["players"].push(playerCard);
    }

    // tableを返します。
    return table;
  }

  static initialCards(gameMode) {
    if (gameMode == "poker") return 5;
    if (gameMode == "21") return 2;
  }

  // 卓の情報を表示するメソッドを作成します。
  static printTableInformation(table) {
    console.log("Amount of players: " + table["players"].length + "... Game mode: " + table["gameMode"] + ". At this table: ");

    for (let i = 0; i < table["players"].length; i++) {
      console.log("Player " + (i + 1) + " hand is: ");
      for (let j = 0; j < table["players"][i].length; j++) {
        console.log(table["players"][i][j].getCardString());
      }
    }
  }

  // 各プレーヤーの手札を受け取って、合計値を計算するscore21Individualメソッドを作成します。
  // ブラックジャックでは値の合計値が21を超えるとNGなのでその場合は0とします。
  static score21Individual(cards) {
    let value = 0;
    for (let i = 0; i < cards.length; i++) {
      value += cards[i].intValue;
    }

    if (value > 21) value = 0;
    return value;
  }
}

class HelperFunctions {
  static maxInArrayIndex(intArr) {
    let maxIndex = 0;
    let maxValue = intArr[0];

    for (let i = 1; i < intArr.length; i++) {
      if (intArr[i] > maxValue) {
        maxValue = intArr[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }
}

// 最大値は19(= index 2)
let arr1 = [1, 9, 19, 3, 4, 6];
console.log(HelperFunctions.maxInArrayIndex(arr1));

// 最大値は5(= index 0)
let arr2 = [5, 2, 1, 3, 5, 5];
console.log(HelperFunctions.maxInArrayIndex(arr2));
