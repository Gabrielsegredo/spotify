const songs = [
  {
      name: "Música 1",
      source: "caminho_da_musica_1.mp3"
  },
  {
      name: "Música 2",
      source: "caminho_da_musica_2.mp3"
  },
  // Adicione mais músicas aqui
];

let currentSongIndex = 0;
let score = 0;

const player = document.getElementById("player");
const responseInput = document.getElementById("answer");
const checkButton = document.getElementById("check");
const scoreDisplay = document.getElementById("score");

function loadSong() {
  player.src = songs[currentSongIndex].source;
  player.load();
  player.play();
}

function checkAnswer() {
  const userAnswer = responseInput.value.toLowerCase();
  const correctAnswer = songs[currentSongIndex].name.toLowerCase();

  if (userAnswer === correctAnswer) {
      score++;
      alert("Resposta correta! Sua pontuação é " + score);
  } else {
      alert("Resposta incorreta. A resposta correta era: " + songs[currentSongIndex].name);
  }

  currentSongIndex++;

  if (currentSongIndex < songs.length) {
      loadSong();
  } else {
      alert("Fim do jogo. Sua pontuação final é " + score);
      player.style.display = "none";
      responseInput.style.display = "none";
      checkButton.style.display = "none";
      scoreDisplay.style.display = "none";
  }

  responseInput.value = "";
  scoreDisplay.innerText = "Pontuação: " + score;
}

loadSong();

checkButton.addEventListener("click", checkAnswer);