const promptContainer = document.getElementById('prompt-container');

const feelings = ['Sinister', 'Happiness', 'Sadness', 'Anger', 'Love', 'Fear', 'Hope', 'Loneliness', 'Excitement', 'Calmness', 'Nostalgia', 'Confidence', 'Mystery', 'Surprise', 'Regret', 'Peace', 'Passion', 'Longing', 'Anxiety', 'Awe', 'Desire', 'Euphoria', 'Grief', 'Curiosity', 'Optimism', 'Discontent', 'Gratitude', 'Pride', 'Tension'];
const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const scales = ['Major (Ionian) Scale', 'Natural Minor (Aeolian) Scale', 'Harmonic Minor Scale', 'Melodic Minor Scale', 'Dorian Mode', 'Phrygian Mode', 'Lydian Mode', 'Mixolydian Mode', 'Locrian Mode', 'Pentatonic Major Scale', 'Pentatonic Minor Scale', 'Blues Scale', 'Hungarian Minor Scale', 'Phrygian Dominant Scale', 'Whole Tone Scale'];

function getRandomItem(arr) {
  return Math.floor(Math.random() * arr.length);
}

function appendPrompt() {
  const feeling = feelings[getRandomItem(feelings)];
  const key = keys[getRandomItem(keys)];
  const scale = scales[getRandomItem(scales)];

  promptContainer.innerHTML = `<div>Write a song that sounds like</div> <div><span class="feeling item">${feeling}</span> in <span class="key item">${key}</span> with the <span class="scale item">${scale}</span></div>`;
}

appendPrompt();