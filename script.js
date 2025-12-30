const words = ["Hospital", "Home", "School", "Building"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 120;
const element = document.getElementById("type-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    element.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    element.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
