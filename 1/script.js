//declaration function
//hoisting
//this statement
function test() {
  console.log("hello", this);
}

// expression
const TestExp = () => {};
// initialize pokemon blueprint
// function Pokemon(name, element, hp) {
//   //initialize
//   this.name = name;
//   this.element = element;
//   this.hp = hp;
// }

// function Digimon(name, element, hp) {
//   this.name = name;
//   this.element = element;
//   this.hp = hp;
// }

// Pokemon.prototype.attack = function (opponent) {
//   if (opponent instanceof Pokemon) {
//     console.log("attack");
//     opponent.hp = opponent.hp - 10;
//   } else {
//     console.log("attack can only be used on the same class!");
//   }
// };
// Pokemon.prototype.revive = function () {
//   console.log("revive");
//   this.hp = this.hp + 10;
// };
// Digimon.prototype.attack = function (opponent) {
//   if (opponent instanceof Digimon) {
//     console.log("attack");
//     opponent.hp = opponent.hp - 10;
//   } else {
//     console.log("attack can only be used on the same class!");
//   }
// };
// Digimon.prototype.revive = function () {
//   console.log("revive");
//   this.hp = this.hp + 10;
// };
// create a new instance
// "new" statement
//FUNCTION DECLARATION
function Pokemon(name, element, hp) {
  //initialize
  this.name = name;
  this.element = element;
  this.hp = hp;
}

Pokemon.prototype.attack = function (opponent) {
  if (opponent instanceof Pokemon) {
    console.log("attack");
    opponent.hp = opponent.hp - 10;
  } else {
    console.log("attack can only be used on the same class!");
  }
};
Pokemon.prototype.revive = function () {
  console.log("revive");
  this.hp = this.hp + 10;
};

// ES6 SYNTAX
class PokemonClass {
  //initialize properties
  constructor(name, element, hp) {
    //initialize
    this.name = name;
    this.element = element;
    this.hp = hp;
  }
  //initialize method
  attack(opponent) {
    if (opponent instanceof Pokemon) {
      console.log("attack");
      opponent.hp = opponent.hp - 10;
    } else {
      console.log("attack can only be used on the same class!");
    }
  }
  revive() {
    console.log("revive");
    this.hp = this.hp + 10;
  }
}
