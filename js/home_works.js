const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegex = /\w+@gmail\.com/;

gmailBtn.onclick = () => {
    if (gmailRegex.test(gmailInput.value)) {
        gmailResult.innerText = "Valid Gmail";

    } else {
        gmailResult.innerText = "Invalid Gmail";
    }
}

const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");

let position = 0;
function moveBlock() {
    if (position <= 448) {
        position++;
        childBlock.style.left = `${position}px`;
        requestAnimationFrame(moveBlock);
    }
}


moveBlock();