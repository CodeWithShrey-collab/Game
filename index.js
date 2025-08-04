// Reset button logic
document.addEventListener('DOMContentLoaded', function() {
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.onclick = function() {
      userScore = 0;
      compScore = 0;
      document.getElementById('user-score').textContent = userScore;
      document.getElementById('comp-score').textContent = compScore;
      document.getElementById('game-number').textContent = 0;
      document.getElementById('game-count').style.display = 'none';
      document.getElementById('result-box').textContent = '';
    };
  }
});
let userScore = 0;
let compScore = 0;

document.getElementById('start-btn').onclick = function() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-area').style.display = 'flex';
};

function play(userChoice) {
  let randomNumber = Math.random() * 3;
  let computerChoice = '';
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Rock';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Paper';
  } else {
    computerChoice = 'Scissor';
  }

  let resultBox = document.getElementById('result-box');
  let resultMsg = '';
  let resultClass = '';

  if (userChoice === computerChoice) {
    resultMsg = `It's a Tie! Both chose ${icon(userChoice)}`;
    resultClass = 'result-tie';
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissor') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissor' && computerChoice === 'Paper')
  ) {
    resultMsg = `You Win! ${icon(userChoice)} beats ${icon(computerChoice)}`;
    resultClass = 'result-win';
    userScore++;
  } else {
    resultMsg = `You Lose! ${icon(computerChoice)} beats ${icon(userChoice)}`;
    resultClass = 'result-lose';
    compScore++;
  }

  // Animate result box
  resultBox.textContent = resultMsg;
  resultBox.className = resultClass + ' show';
  setTimeout(() => {
    resultBox.classList.remove('show');
  }, 1200);

  // Update scoreboard
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('comp-score').textContent = compScore;
  // Show and update game count after every play
  const gameCountDiv = document.getElementById('game-count');
  let gameNum = userScore + compScore;
  document.getElementById('game-number').textContent = gameNum;
  if (gameNum > 0) {
    gameCountDiv.style.display = 'block';
  } else {
    gameCountDiv.style.display = 'none';
  }
}

function icon(choice) {
  if (choice === 'Rock') return '✊';
  if (choice === 'Paper') return '✋';
  if (choice === 'Scissor') return '✌️';
  return '';
}
