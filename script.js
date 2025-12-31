const words = ["Hospital", "Home", "School", "Building"];
let index = 0;
let char = 0;
let deleting = false;
const speed = 120;
const target = document.getElementById("type-text");

function typeEffect() {
  const word = words[index];

  if (!deleting) {
    target.textContent = word.substring(0, char++);
    if (char > word.length) {
      deleting = true;
      setTimeout(() => {}, 1000);
    }
  } else {
    target.textContent = word.substring(0, char--);
    if (char === 0) {
      deleting = false;
      index = (index + 1) % words.length;
    }
  }
  setTimeout(typeEffect, speed);
}

typeEffect();

function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeRMUlk6xw5G_GcLbMhgeYbDkofXEBjdF_ZqPAer8_8WfTwGA/viewform",
    "_blank"
  );
}
