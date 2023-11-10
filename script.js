const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvas_height = canvas.height = 600;
const canvas_width = canvas.width = 600;


const playerImg = new Image();
playerImg.src = '/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 7;

// LEFT OFF HERE https://youtu.be/GFO_txvwK_c?si=t35fiqiSmLUPd0cC&t=1680 (28 min)

function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    ctx.drawImage(playerImg, frameX, frameY, spriteWidth, spriteHeight, 0, 450, 150, 150);

    let position = Math.floor(gameFrame / staggerFrames) % 6;
    frameX = spriteWidth * position;

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();



let startMessage = document.querySelector("#start");

function onStart() {
    startMessage.textContent = "PAUSED";
}



// NOTES
// #1 - Draw the sprite
// Draws the 1st sprite on the sheet, with it sitting in the left(0) bottom(450) at 150px wide/high
// First 4 numbers are where to cut it from the sprite sheet
// Last 4 are where to position on canvas from left and from top, and then resize the width and height
ctx.drawImage(playerImg, 0, 0, spriteWidth, spriteHeight, 0, 450, 150, 150);
// #2 - Less fancy animation:
// ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 450, 150, 150);
// if (gameFrame % staggerFrames == 0) {
//     if (frameX < 6) frameX++;
//     else frameX = 0;
// }

