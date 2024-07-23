const diceImagesList =
    [
      'images/dice1.png', 'images/dice2.png', 'images/dice3.png',
      'images/dice4.png', 'images/dice5.png', 'images/dice6.png'
    ]

    var Dice1 = 'images/dice6.png'
var Dice2 = 'images/dice6.png'
var diceVal1
var diceVal2

document.querySelector('button').onclick = function() {
  var diceImg
  for (let index = 0; index < 2; index++) {
    var diceNmbr = Math.random() * 6
    var diceSel = Math.floor(diceNmbr)

    if (index === 0) {
      diceVal1 = diceSel
    }

    else if (index === 1) {
      diceVal2 = diceSel
    }
  }

  document.getElementsByClassName('img1')[0].setAttribute(
      'src', diceImagesList[diceVal1]);
  document.getElementsByClassName('img2')[0].setAttribute(
      'src', diceImagesList[diceVal2]);

  if (diceVal1 > diceVal2) {
    document.querySelector('h1').textContent = ('🚩 Player 1 Wins!')
  }
  if (diceVal1 < diceVal2) {
    document.querySelector('h1').textContent = ('Player 2 Wins! 🚩')
  }
  if (diceVal1 === diceVal2) {
    document.querySelector('h1').textContent = ('🚩It\'s a Draw!🚩')
  }
}
