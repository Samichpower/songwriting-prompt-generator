const promptContainer = document.getElementById('prompt-container');

const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const scales = ['Major Scale', 'Natural Minor Scale', 'Harmonic Minor Scale', 'Melodic Minor Scale', 'Dorian Mode', 'Phrygian Mode', 'Lydian Mode', 'Mixolydian Mode', 'Locrian Mode', 'Pentatonic Major Scale', 'Pentatonic Minor Scale', 'Blues Scale', 'Hungarian Minor Scale', 'Phrygian Dominant Scale', 'Whole Tone Scale']

function getRandomNum(arr) {
  return Math.floor(Math.random() * arr.length);
}

console.log(scales[getRandomNum(scales)]);