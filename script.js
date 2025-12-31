/* Typing Animation */
const words = ["Hospital", "Home", "School", "Building"];
let index = 0;
let char = 0;
let deleting = false;
const speed = 120;
const text = document.getElementById("type-text");

function typeEffect() {
  const word = words[index];

  if (!deleting) {
    text.textContent = word.substring(0, char++);
    if (char > word.length) {
      deleting = true;
      setTimeout(() => {}, 800);
    }
  } else {
    text.textContent = word.substring(0, char--);
    if (char === 0) {
      deleting = false;
      index = (index + 1) % words.length;
    }
  }
  setTimeout(typeEffect, speed);
}

typeEffect();

/* Mobile Menu */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

/* Google Form */
function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeRMUlk6xw5G_GcLbMhgeYbDkofXEBjdF_ZqPAer8_8WfTwGA/viewform",
    "_blank"
  );
}
