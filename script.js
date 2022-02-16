'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let num = Math.trunc(Math.random() * 20) + 1;
let sc = 20;
let hsc = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  //Score decreases with each wrong guesses by 1.
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess == num) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '60rem';

    if (sc > hsc) {
      hsc = sc;
      document.querySelector('.highscore').textContent = hsc;
    }
  }
  if (sc > 0) {
    if (guess > num) {
      document.querySelector('.message').textContent = 'Lower Number';
      sc--;
    } else if (guess < num) {
      document.querySelector('.message').textContent = 'Higher Number';
      sc--;
    }
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
  }
  document.querySelector('.score').textContent = sc;
});
document.querySelector('.again').addEventListener('click', function () {
  sc = 20;
  let num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = sc;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
