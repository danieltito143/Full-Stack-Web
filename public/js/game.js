/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class Choice {
  constructor(yourChoice) {
    this.yourChoice = yourChoice;
    this.PcChoice = this.drawPcChoice();
  }

  getYourChoice() {
    return this.yourChoice;
  }

  getPcChoice() {
    return this.PcChoice;
  }

  drawPcChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
  }
}

class Game {
  constructor() {
    this.optionsImgPlayer = document.querySelectorAll('.player');
    this.optionsImgPlayer.forEach((option) => option.addEventListener('click', this.startGame.bind(this)));
    this.optionsImgPC = document.querySelectorAll('.comp');
    this.resetButton = document.querySelector('.reset');
    this.resetButton.addEventListener('click', () => this.reset(), false);
    this.choice = null;
    this.result = null;
    this.playerScore = 0;
    this.compScore = 0;
    this.playerScore_span = document.getElementById('player-score');
    this.compScore_span = document.getElementById('comp-score');
  }

  _decideWinner(yourChoice, PcChoice) {
    if (
      (yourChoice === 'rock' && PcChoice === 'scissors')
      || (yourChoice === 'scissors' && PcChoice === 'paper')
      || (yourChoice === 'paper' && PcChoice === 'rock')
    ) {
      this.playerScore += 1;
      this.playerScore_span.innerHTML = this.playerScore;
      return 'Player 1 Win';
    }
    if (
      (yourChoice === 'scissors' && PcChoice === 'rock')
      || (yourChoice === 'paper' && PcChoice === 'scissors')
      || (yourChoice === 'rock' && PcChoice === 'paper')
    ) {
      this.compScore += 1;
      this.compScore_span.innerHTML = this.compScore;
      return 'Comp Win';
    }
    return 'Draw';
  }

  startGame(e) {
    this.choice = new Choice(e.target.dataset.option);
    const yourChoice = this.choice.getYourChoice();
    const PcChoice = this.choice.getPcChoice();
    this.result = this._decideWinner(yourChoice, PcChoice);

    document.querySelectorAll('.selected').forEach((option) => option.classList.toggle('selected'));
    [...this.optionsImgPlayer].find((choice) => choice.dataset.option === yourChoice).classList.add('selected');
    [...this.optionsImgPC].find((choice) => choice.dataset.option === PcChoice).classList.add('selected');

    if (document.getElementById('vs').innerHTML === 'VS') {
      document.querySelector('.versus').classList.replace('versus', 'result');
    }
    document.getElementById('vs').innerHTML = this.result;
  }

  reset() {
    this.choice = null;
    [...this.optionsImgPlayer].find((choice) => choice.classList.contains('selected')).classList.toggle('selected');
    [...this.optionsImgPC].find((choice) => choice.classList.contains('selected')).classList.toggle('selected');
    document.querySelector('.result').classList.replace('result', 'versus');
    document.getElementById('vs').innerHTML = 'VS';
    this.playerScore = 0;
    this.compScore = 0;
    this.playerScore_span.innerHTML = this.playerScore;
    this.compScore_span.innerHTML = this.compScore;
  }
}

const newGame = new Game();
