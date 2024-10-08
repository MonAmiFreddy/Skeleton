let currentPart = '';

function startGame(mode) {
  document.getElementById('start-menu').classList.add('hidden');
  if (mode === 'explore') {
    document.getElementById('body-explorer').classList.remove('hidden');
  }
  // Additional game modes (challenge, puzzle) can be handled here
}

function showXray(part) {
  currentPart = part;
  document.getElementById('body-explorer').classList.add('hidden');
  document.getElementById('xray-viewer').classList.remove('hidden');
  document.getElementById('body-part-name').innerText = part;
  document.getElementById('xray-image').src = `images/${part}-xray.png`;
}

function showQuiz() {
  document.getElementById('xray-viewer').classList.add('hidden');
  document.getElementById('quiz-section').classList.remove('hidden');

  // Example quiz for "skull"
  if (currentPart === 'skull') {
    document.getElementById('quiz-question').innerText = "What bone is in the upper arm?";
    document.getElementById('quiz-options').innerHTML = `
      <button onclick="checkAnswer('Femur')">Femur</button>
      <button onclick="checkAnswer('Humerus')">Humerus</button>
      <button onclick="checkAnswer('Tibia')">Tibia</button>`;
  }
}

function checkAnswer(answer) {
  if (answer === 'Humerus') {
    alert('Correct!');
  } else {
    alert('Try again!');
  }
}

function goBack() {
  document.getElementById('xray-viewer').classList.add('hidden');
  document.getElementById('body-explorer').classList.remove('hidden');
}
