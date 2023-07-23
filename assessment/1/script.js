let battlefieldDom = document.querySelector("#battlefield");
let spritePlayer1 = document.querySelector("#player1");
let spritePlayer2 = document.querySelector("#player2");
let battleScreenContainer = document.querySelector(
  ".battle-sequence-container"
);

let spritePosition1 = { x: 0, y: 0 };
let spritePosition2 = { x: 300, y: 360 };

window.addEventListener("load", function () {
  createBattlefield();
});

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    if (spritePosition1.y === 0) {
      return;
    } else {
      // console.log("fire!");
      spritePosition1.y -= 60;
      updateSpritePosition("up");
    }
  } else if (event.key === "ArrowDown") {
    if (spritePosition1.y === 540) {
      return;
    } else {
      // console.log("fire!");
      spritePosition1.y += 60;
      updateSpritePosition("down");
    }
  } else if (event.key === "ArrowRight") {
    if (spritePosition1.x === 540) {
      return;
    } else {
      // console.log("fire!");
      spritePosition1.x += 60;
      updateSpritePosition("right");
      spritePlayer1.style.transform = "scaleX(-1)";
    }
  } else if (event.key === "ArrowLeft") {
    if (spritePosition1.x === 0) {
      return;
    } else {
      // console.log("fire!");
      spritePosition1.x -= 60;
      updateSpritePosition("left");
      spritePlayer1.style.transform = "scaleX(1)";
    }
  }
});

function updateSpritePosition(key) {
  if (key === "up") {
    spritePlayer1.style.top = spritePosition1.y + "px";
  } else if (key === "down") {
    spritePlayer1.style.top = spritePosition1.y + "px";
  } else if (key === "right") {
    spritePlayer1.style.left = spritePosition1.x + "px";
  } else if (key === "left") {
    spritePlayer1.style.left = spritePosition1.x + "px";
  }
  console.log("Player1:", spritePosition1);
  console.log("Player2:", spritePosition2);
  checkCollision();
}

function createBattlefield() {
  for (let i = 0; i < 10; i++) {
    let newRowDom = document.createElement("div");
    newRowDom.classList.add("row");
    for (let j = 0; j < 10; j++) {
      let newTileDom = document.createElement("div");
      newTileDom.classList.add("tile");
      newRowDom.appendChild(newTileDom);
    }
    battlefieldDom.appendChild(newRowDom);
  }
}

function checkCollision() {
  if (
    spritePosition1.x === spritePosition2.x &&
    spritePosition1.y === spritePosition2.y
  ) {
    alert("GET READY TO BATTLE!");
    startBattle();
  }
}

//BATTLE SCREEN

function startBattle() {
  battlefieldDom.setAttribute("style", "display: none");
  battleScreenContainer.setAttribute("style", "display: flex");
  backgroundMusic.play();
  backgroundMusic.volume = 0.3;
}

function opponentTurn() {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    attack("opponent");
  } else {
    heal("opponent");
  }
}

function turnCounter() {
  if (takeTurns % 2 === 0) {
    menuText.textContent = "WHAT WILL YOU DO?";
  } else {
    menuText.textContent = "OPPONENT'S TURN!";
    opponentTurn();
  }
}

class PokemonClass {
  constructor(name, element, hp) {
    this.name = name;
    this.element = element;
    this.hp = hp;
  }
}

function attack(value) {
  if (value === "player") {
    const randomDamage = Math.random();
    const min = 10;
    const max = 30;
    const randomNumber = min + randomDamage * (max - min);
    const randomInteger = Math.round(randomNumber);
    opponentPokemon.hp = opponentPokemon.hp - randomInteger;
    opponentHPDom.textContent = `HP ${opponentPokemon.hp}`;
    console.log("player attack!");
    checkWinCondition();
    console.log(takeTurns);
    takeTurns = takeTurns + 1;
    setTimeout(opponentTurn(), 3000);
  } else if (value === "opponent") {
    const randomDamage = Math.random();
    const min = 9;
    const max = 30;
    const randomNumber = min + randomDamage * (max - min);
    const randomInteger = Math.round(randomNumber);
    playerPokemon.hp = playerPokemon.hp - randomInteger;
    playerHPDom.textContent = `HP ${playerPokemon.hp}`;
    console.log("opponent attack!");
    checkWinCondition();
    console.log(takeTurns);
    takeTurns = takeTurns + 1;
  }
}

function heal(value) {
  if (value === "player") {
    playerPokemon.hp = playerPokemon.hp + 15;
    playerHPDom.textContent = `HP ${playerPokemon.hp}`;
    console.log("player heal!");
    checkWinCondition();
    console.log(takeTurns);
    takeTurns = takeTurns + 1;
    setTimeout(opponentTurn(), 3000);
  } else if (value === "opponent") {
    opponentPokemon.hp = opponentPokemon.hp + 15;
    opponentHPDom.textContent = `HP ${opponentPokemon.hp}`;
    console.log("opponent heal!");
    checkWinCondition();
    console.log(takeTurns);
    takeTurns = takeTurns + 1;
  }
}

function checkWinCondition() {
  if (playerPokemon.hp <= 0) {
    alert(`${playerPokemon.name} fainted! You lose!`);
    resetGame();
  } else if (opponentPokemon.hp <= 0) {
    alert(`${opponentPokemon.name} fainted! You win!`);
    resetGame();
  }
}

function resetGame() {
  playerPokemon.hp = 100;
  opponentPokemon.hp = 100;
  playerHPDom.textContent = `HP ${playerPokemon.hp}`;
  opponentHPDom.textContent = `HP ${opponentPokemon.hp}`;
  takeTurns = 0;
  battlefieldDom.setAttribute("style", "display: block");
  battleScreenContainer.setAttribute("style", "display: none");
}

let playerPokemon = new PokemonClass("blaziken", "fire", 100);
let opponentPokemon = new PokemonClass("lugia", "flying", 100);
let playerHPDom = document.querySelector("#playerHP");
let opponentHPDom = document.querySelector("#opponentHP");
let menuText = document.querySelector(".menu-item");
let takeTurns = 0;
let backgroundMusic = document.querySelector("#backgroundMusic");
