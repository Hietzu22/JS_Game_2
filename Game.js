var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var playerWidth = 50;
var playerHeight = 50;
var canvasWidth = 720;
var canvasHeight = 500;
var playerSpeed = 10;
var playerX = (canvasWidth-playerWidth);
var playerY = (canvasHeight-playerHeight);
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var time = 0

function drawPlayer() {
    ctx.beginPath()
    ctx.fillRect(335, 225, playerWidth, playerHeight);
    ctx.stroke()
}

function drawTime() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Time: "+time, 20, 35);
    }

function draw() {
    drawPlayer();
    drawTime();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "d") {
        rightPressed = true;
    } else if(e.key == "a") {
        leftPressed = true;
    } else if(e.key == "w") {
        upPressed = true;
    } else if(e.key == "s") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "d") {
        rightPressed = false;
    } else if(e.key == "a") {
        leftPressed = false;
    } else if(e.key == "w") {
        upPressed = false;
    } else if(e.key == "s") {
        downPressed = false;
    }
}

if(rightPressed && playerX < canvasWidth-playerWidth) {
    playerX += playerSpeed;
} else if(leftPressed && playerX > 0) {
    playerX -= playerSpeed;
} else if(upPressed && playerY > 0) {
    playerY -= playerSpeed;
} else if(downPressed && playerY < canvasHeight-playerHeight) {
    playerY += playerSpeed;
}

draw();