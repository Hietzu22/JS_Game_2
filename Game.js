var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var playerWidth = 50;
var playerHeight = 50;
var canvasWidth = 720;
var canvasHeight = 500;
var playerSpeed = 5;
var playerX = 335;
var playerY = 225;
var bulletSpeed = 15;
var bulletLength = 50;
var bulletWidth = 30;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var time = 0;

function drawPlayer() {
    ctx.beginPath()
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    ctx.stroke()
}

function drawTime() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Time: "+time, 20, 35);
}

function drawBullets() {
    ctx.beginPath()
    ctx.fillRect(0, 0, bulletWidth, bulletLength);
    ctx.stroke()
}    

function draw() {
    clearCanvas();
    drawPlayer();
    drawTime();
    drawBullets();
    playerMovement();
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "d") {
        rightPressed = true;
    }
    
    if(e.key == "a") {
        leftPressed = true;
    }
    
    if(e.key == "w") {
        upPressed = true;
    }
    
    if(e.key == "s") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "d") {
        rightPressed = false;
    }
    
    if(e.key == "a") {
        leftPressed = false;
    }
    
    if(e.key == "w") {
        upPressed = false;
    }
    
    if(e.key == "s") {
        downPressed = false;
    }
}

function playerMovement() {
    if(rightPressed && playerX < canvasWidth-playerWidth) {
        playerX += playerSpeed;
    }
    
    if(leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
    
    if(upPressed && playerY > 0) {
        playerY -= playerSpeed;
    }
    
    if(downPressed && playerY < canvasHeight-playerHeight) {
        playerY += playerSpeed;
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

draw();