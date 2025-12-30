const words = ["Hospital", "Home", "School", "Building"];
let i = 0, j = 0, del = false;
const el = document.getElementById("type-text");

function type() {
  if (!del) {
    el.textContent = words[i].slice(0, ++j);
    if (j === words[i].length) del = true;
  } else {
    el.textContent = words[i].slice(0, --j);
    if (j === 0) {
      del = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, del ? 80 : 120);
}
type();
