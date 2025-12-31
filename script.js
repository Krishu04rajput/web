// Typing animation
const words = ["Hospital", "Home", "School", "Building"];
let i = 0, j = 0;
let isDeleting = false;
const el = document.getElementById("type");

function type() {
  let word = words[i];
  el.textContent = isDeleting
    ? word.substring(0, j--)
    : word.substring(0, j++);

  if (!isDeleting && j === word.length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, isDeleting ? 70 : 120);
}
type();

// Modal logic (SAFE)
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("quoteModal");
  document.getElementById("quoteBtn").onclick = () => modal.style.display = "block";
  document.getElementById("closeModal").onclick = () => modal.style.display = "none";
});
