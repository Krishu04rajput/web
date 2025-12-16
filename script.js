// Typing Effect
const words = ["a Developer", "a Designer", "a Creator"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }

    typing.textContent = current;

    if (j === words[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }
  setTimeout(typeEffect, 120);
}
typeEffect();

// Scroll animation
const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

