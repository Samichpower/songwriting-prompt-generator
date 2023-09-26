const promptContainer = document.getElementById('prompt-container');
const newPromptButton = document.getElementById('new-prompt-button');

const feelings = ['Sinister', 'Happiness', 'Sadness', 'Anger', 'Love', 'Fear', 'Hope', 'Loneliness', 'Excitement', 'Calmness', 'Nostalgia', 'Confidence', 'Mystery', 'Surprise', 'Regret', 'Peace', 'Passion', 'Longing', 'Anxiety', 'Awe', 'Desire', 'Euphoria', 'Grief', 'Curiosity', 'Optimism', 'Discontent', 'Gratitude', 'Pride', 'Tension'];
const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const scales = ['Major (Ionian) Scale', 'Natural Minor (Aeolian) Scale', 'Harmonic Minor Scale', 'Melodic Minor Scale', 'Dorian Mode', 'Phrygian Mode', 'Lydian Mode', 'Mixolydian Mode', 'Locrian Mode', 'Pentatonic Major Scale', 'Pentatonic Minor Scale', 'Blues Scale', 'Hungarian Minor Scale', 'Phrygian Dominant Scale', 'Whole Tone Scale'];

function appendPrompt() {
  function getRandomItem(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  const feeling = document.getElementById('feeling');
  const key = document.getElementById('key');
  const scale = document.getElementById('scale');

  feeling.textContent = feelings[getRandomItem(feelings)];
  key.textContent = keys[getRandomItem(keys)];
  scale.textContent = scales[getRandomItem(scales)];
}

newPromptButton.addEventListener('click', appendPrompt);
appendPrompt();