const words = ["Hospital", "Home", "School", "Building"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
const speed = 120;
const el = document.getElementById("type");

function type() {
  if (!isDeleting && j <= words[i].length) {
    current = words[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    current = words[i].substring(0, j--);
  }

  el.textContent = current;

  if (j === words[i].length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();

function openQuote() {
  document.getElementById("quoteModal").style.display = "block";
}

function closeQuote() {
  document.getElementById("quoteModal").style.display = "none";
}
