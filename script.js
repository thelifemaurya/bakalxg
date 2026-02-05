const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('main-card');
const successMsg = document.getElementById('success-msg');

function moveButtonSafely() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const padding = 20;       // screen edge padding
    const safeDistance = 100; // minimum distance from YES button

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const yesRect = yesBtn.getBoundingClientRect();

    let x, y;
    let attempts = 0;

    do {
        x = Math.random() * maxX;
        y = Math.random() * maxY;
        attempts++;
    } while (
        Math.abs(x - yesRect.left) < safeDistance &&
        Math.abs(y - yesRect.top) < safeDistance &&
        attempts < 50
    );

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Desktop + Mobile + Infinite escape
['mouseover', 'pointerenter', 'touchstart', 'click'].forEach(event => {
    noBtn.addEventListener(event, (e) => {
        e.preventDefault();
        moveButtonSafely();
    });
});

// YES button logic
yesBtn.addEventListener('click', () => {
    mainCard.classList.add('hidden');
    successMsg.classList.remove('hidden');
});
