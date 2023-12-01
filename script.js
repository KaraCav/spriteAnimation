let playerState = 'sit';
let dropdown = document.querySelector("#animations");
dropdown.addEventListener("change", function (e) {
    playerState = e.target.value;
    console.log(playerState);
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvas_height = canvas.height = 600;
const canvas_width = canvas.width = 600;

const playerImg = new Image();
playerImg.src = './shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 7;

const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 7,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }

];
animationStates.forEach((action, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < action.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[action.name] = frames;
});
console.log(spriteAnimations);

// LEFT OFF HERE https://youtu.be/GFO_txvwK_c?si=t35fiqiSmLUPd0cC&t=1680 (28 min)

function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);

    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImg, frameX, frameY, spriteWidth, spriteHeight, 0, 450, 150, 150);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();



// let startMessage = document.querySelector("#start");

// function onStart() {
//     startMessage.textContent = "PAUSED";
// }



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

