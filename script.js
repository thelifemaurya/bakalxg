const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainCard = document.getElementById("main-card");
const successMsg = document.getElementById("success-msg");

function moveNoButton() {
  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;
  const padding = 12;
  const safeGap = 120;

  const yesRect = yesBtn.getBoundingClientRect();

  const maxX = window.innerWidth - btnW - padding;
  const maxY = window.innerHeight - btnH - padding;

  let x, y;

  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
  } while (
    Math.abs(x - yesRect.left) < safeGap &&
    Math.abs(y - yesRect.top) < safeGap
  );

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// NO button escape forever 😈
["mouseover", "pointerenter", "touchstart"].forEach(evt => {
  noBtn.addEventListener(evt, e => {
    e.preventDefault();
    moveNoButton();
  });
});

// YES click 💖
yesBtn.addEventListener("click", () => {
  mainCard.classList.add("hidden");
  successMsg.classList.remove("hidden");
});
