// Typing Effect
const words = ["Hospital", "Home", "School", "Building"];
let i = 0, j = 0;
let current = "";
let deleting = false;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (!deleting && j <= words[i].length) {
    current = words[i].substring(0, j++);
  } else if (deleting && j >= 0) {
    current = words[i].substring(0, j--);
  }

  typing.textContent = current;

  if (j === words[i].length) deleting = true;
  if (j === 0 && deleting) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, 120);
}
typeEffect();

// Scroll Reveal
const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
