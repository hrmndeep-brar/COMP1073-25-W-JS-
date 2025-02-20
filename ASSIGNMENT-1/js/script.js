// Array of word arrays for each colored button (column)
// The first array corresponds to the purple button, the second to blue, and so on.
const words = [
    ["Aunt", "Hina", "Uncle John", "Anna", "My Professor", "The Tiger", "The lion"],
    ["talked to", "travelled with", "sat on", "saw", "studied with", "hugged tightly"],
    ["a stubborn", "a lazy", "a beautiful", "a slimy", "a messy", "an intelligent"],
    ["duck", "ship", "horse", "cat", "unicorn", "vampire", "warewolf"],
    ["on the jupiter", "in Paris", "in the class", "in London", "on the grass", "in Canada"]
  ];
  
  // Array holding the current index for each column
  let indices = [0, 0, 0, 0, 0];
  
  // Function called when a colored button is clicked
  function cycleWord(col) {
    // Cycle through words for the clicked column
    indices[col] = (indices[col] + 1) % words[col].length;
    
    // Get the current word for this column
    let currentWord = words[col][indices[col]];
    
    // Speak the word using browser's speech synthesis
    let utterance = new SpeechSynthesisUtterance(currentWord);
    window.speechSynthesis.speak(utterance);
    
    // Update the displayed story combining all current words
    updateStoryDisplay();
  }
  
  // Update the story display by combining each column's current word
  function updateStoryDisplay() {
    let story = indices.map((index, col) => words[col][index]).join(" ");
    document.getElementById("wordDisplay").textContent = story;
  }
  
  // Function to generate a random story when the bottom button is pressed
  function generateStory() {
    // Randomize the index for each word column
    indices = indices.map((_, col) => Math.floor(Math.random() * words[col].length));
    
    // Combine and display the random story
    let story = indices.map((index, col) => words[col][index]).join(" ");
    document.getElementById("wordDisplay").textContent = story;
    
    // Speak the entire story aloud
    let utterance = new SpeechSynthesisUtterance(story);
    window.speechSynthesis.speak(utterance);
  }
  
  // Optional: initialize the display with the first words
  updateStoryDisplay();
  

  