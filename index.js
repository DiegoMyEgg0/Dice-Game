var Dice1 = 'images/dice6.png'
var Dice2 = 'images/dice6.png'
var diceVal1
var diceVal2

document.querySelector('button').onclick = function() {
  var diceImg
  for (let index = 0; index < 2; index++) {
    var diceNmbr = Math.random() * 6
    var diceSel = Math.floor(diceNmbr) + 1

    if (diceSel === 1) {
      diceImg = 'images/dice1.png'
    }

    else if (diceSel === 2) {
      diceImg = 'images/dice2.png'
    }

    else if (diceSel === 3) {
      diceImg = 'images/dice3.png'
    }

    else if (diceSel === 4) {
      diceImg = 'images/dice4.png'
    }

    else if (diceSel === 5) {
      diceImg = 'images/dice5.png'
    }

    else if (diceSel === 6) {
      diceImg = 'images/dice6.png'
    }

    if (index === 0) {
      dice1 = diceImg
      diceVal1 = diceSel
    }

    else if (index === 1) {
      dice2 = diceImg
      diceVal2 = diceSel
    }
  }
  document.getElementsByClassName('img1')[0].setAttribute('src', dice1);
  document.getElementsByClassName('img2')[0].setAttribute('src', dice2);
  if (diceVal1 > diceVal2) {
    document.querySelector('h1').textContent = ('🚩Player 1 Wins!')
  }
  if (diceVal1 < diceVal2) {
    document.querySelector('h1').textContent = ('Player 2 Wins!🚩')
  }
  if (diceVal1 === diceVal2) {
    document.querySelector('h1').textContent = ('🚩It\'s a Draw!🚩')
  }
}
