const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainCard = document.getElementById("main-card");
const successMsg = document.getElementById("success-msg");

function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 15;
  const yesRect = yesBtn.getBoundingClientRect();

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  let x, y;

  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
  } while (
    Math.abs(x - yesRect.left) < 120 &&
    Math.abs(y - yesRect.top) < 120
  );

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// escape forever 😈
["mouseover", "touchstart", "pointerenter"].forEach(evt => {
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
