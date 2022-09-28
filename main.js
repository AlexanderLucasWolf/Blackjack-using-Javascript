let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let entryFee = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.querySelector('#cards-el')
let passEl = document.getElementById('startButton')

let player = {
  name: "Player 1",
  chips: 150
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  }
  else if (randomNumber === 1) {
    return 11
  }
  else {
    return randomNumber
  }
}


function startGame(){
  if (entryFee = false) {
    playerEl.textContent = player.name + ": $" + player.chips
  }
  else{
    player.chips -= 10                                                          // pay 10 chips to join a new round so a permanent restart is not possible
    playerEl.textContent = player.name + ": $" + player.chips
  }
  isAlive = true
  hasBlackJack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  passEl.textContent = "Pass"
  renderGame()
}


function renderGame(){
  entryFee = false
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum

  if (sum <= 20){
    message = "Do you want to draw a new card?"
  }
  else if (sum === 21){
    message = "Blackjack!"
    hasBlackJack = true
    player.chips += 50
    playerEl.textContent = player.name + ": $" + player.chips
    passEl.textContent = "Next Round"
    entryFee = true
  }
  else {
    message = "You are out of the game."
    isAlive = false
    player.chips -= 20
    playerEl.textContent = player.name + ": $" + player.chips
    passEl.textContent = "Next Round"
    entryFee = true
  }

  messageEl.textContent = message
}

function newCard() {
  if (isAlive == true && hasBlackJack == false ) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
  else{

  }
}
