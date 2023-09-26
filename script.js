const promptContainer = document.getElementById('prompt-container');

const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function getRandomNum(arr) {
  return Math.floor(Math.random() * arr.length);
}

console.log(keys[getRandomNum(keys)]);