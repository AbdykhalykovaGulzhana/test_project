const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegex = /^\w+@gmail\.com$/;

gmailBtn.onclick = () => {
    if (gmailRegex.test(gmailInput.value)) {
        gmailResult.innerText = "Valid Gmail";

    } else {
        gmailResult.innerText = "Invalid Gmail";
    }
}

// const childBlock = document.querySelector(".child_block");
// const parentBlock = document.querySelector(".parent_block");
//
// let position = 0;
// function moveBlock() {
//     if (position <= 448) {
//         position++;
//         childBlock.style.left = `${position}px`;
//         requestAnimationFrame(moveBlock);
//     }
// }
//
//
// moveBlock();

// ДЗ 2.1
const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");

let left = 0;
let topY = 0;

let offsetX = parentBlock.clientWidth - childBlock.offsetWidth;
let offsetY = parentBlock.clientHeight - childBlock.offsetHeight;

let direction = "right";
const move = () => {
    requestAnimationFrame(move)

    childBlock.style.top = `${topY}px`;
    childBlock.style.left = `${left}px`;

    if (direction === "right") {
        if (left < offsetX) {
            left++;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (topY < offsetY) {
            topY++;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (left > 0) {
            left--;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (topY > 0) {
            topY--;
        } else {
            direction = 'right';
        }
    }
}
move();

// Секундомер ДЗ 2.2
const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let counter = 0;
let interval = null;

// START
startBtn.addEventListener('click', () => {
    if (interval !== null) return;

    interval = setInterval(() => {
        counter++;
        seconds.innerText = counter;
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    counter = 0;
    seconds.innerText = 0;
});
