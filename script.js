const promptContainer = document.getElementById('prompt-container');

const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const scales = ['Major (Ionian) Scale', 'Natural Minor (Aeolian) Scale', 'Harmonic Minor Scale', 'Melodic Minor Scale', 'Dorian Mode', 'Phrygian Mode', 'Lydian Mode', 'Mixolydian Mode', 'Locrian Mode', 'Pentatonic Major Scale', 'Pentatonic Minor Scale', 'Blues Scale', 'Hungarian Minor Scale', 'Phrygian Dominant Scale', 'Whole Tone Scale'];
const feelings = ['Sinister', 'Happy', 'Sad', 'Angry', 'Love', 'Fear', 'Hope', 'Loneliness', 'Excitement', 'Calmness', 'Nostalgia', 'Confidence', 'Mystery', 'Surprise', 'Regret', 'Peace', 'Passion', 'Longing', 'Anxiety', 'Awe', 'Desire', 'Euphoria', 'Grief', 'Curiosity', 'Optimism', 'Discontent', 'Gratitude', 'Pride', 'Tension'];

function getRandomNum(arr) {
  return Math.floor(Math.random() * arr.length);
}

const prompt = `Write a song that sounds ${feelings[getRandomNum(feelings)]} in ${keys[getRandomNum(keys)]} with the ${scales[getRandomNum(scales)]}`

console.log(prompt);