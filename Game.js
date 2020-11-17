var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var playerWidth = 30;
var playerHeight = 30;
var canvasWidth = 720;
var canvasHeight = 500;
var playerSpeed = 5;
var playerX = 335;
var playerY = 225;
var bulletSpeed = 7;
var bulletSize = 30;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var time = 0;
var bulletsRight = [];
var bulletsLeft = [];
var bulletsUp = [];
var bulletsDown = [];



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

function drawBulletsRight() {

    if (bulletsRight.length < 2) {
        if (bulletsRight.length != 0 && bulletsRight[bulletsRight.length-1].x < 360) {
            return;
        }

        let newY = Math.floor(Math.random() * canvasHeight - bulletSize)
        bulletsRight.push({x: 0, y: newY, w: bulletSize, h: bulletSize})
    }

    bulletsRight.forEach(bullet => {
        if (bullet.x + bullet.w > canvasWidth) {
            bulletsRight.shift();
        }
        
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    }); (bulletsRight)
}

function drawBulletsLeft() {

    if (bulletsLeft.length < 2) {
        if (bulletsLeft.length != 0 && bulletsLeft[bulletsLeft.length-1].x > 360) {
            return;
        }

        let newY = Math.floor(Math.random() * canvasHeight - bulletSize)
        bulletsLeft.push({x: canvasWidth, y: newY, w: bulletSize, h: bulletSize})
    }

    bulletsLeft.forEach(bullet => {
        if (bullet.x + bullet.w < 0) {
            bulletsLeft.shift();
        }
        
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    }); (bulletsLeft)
}

function drawBulletsUp() {

    if (bulletsUp.length < 2) {
        if (bulletsUp.length != 0 && bulletsUp[bulletsUp.length-1].y < 250) {
            return;
        }

        let newX = Math.floor(Math.random() * canvasWidth - bulletSize)
        bulletsUp.push({x: newX, y: 0, w: bulletSize, h: bulletSize})
    }

    bulletsUp.forEach(bullet => {
        if (bullet.y + bullet.h > canvasHeight) {
            bulletsUp.shift();
        }
        
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    }); (bulletsUp)
}

function drawBulletsDown() {

    if (bulletsDown.length < 2) {
        if (bulletsDown.length != 0 && bulletsDown[bulletsDown.length-1].x > 250) {
            return;
        }

        let newX = Math.floor(Math.random() * canvasWidth - bulletSize)
        bulletsDown.push({x: newX, y: canvasHeight, w: bulletSize, h: bulletSize})
    }

    bulletsDown.forEach(bullet => {
        if (bullet.y + bullet.h < 0) {
            bulletsDown.shift();
        }
        
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    }); (bulletsDown)
}

function drawBullets() {
    drawBulletsRight();
    drawBulletsLeft();
    drawBulletsUp();
    drawBulletsDown();
}

function moveBulletsRight() {
    bulletsRight.forEach(bullet => {
        bullet.x += bulletSpeed;
    })
}

function moveBulletsLeft() {
    bulletsLeft.forEach(bullet => {
        bullet.x -= bulletSpeed
    })
}

function moveBulletsUp() {
    bulletsUp.forEach(bullet => {
        bullet.y += bulletSpeed;
    })
}

function moveBulletsDown() {
    bulletsDown.forEach(bullet => {
        bullet.y -= bulletSpeed;
    })
}

function moveBullets() {
    moveBulletsRight();
    moveBulletsLeft();
    moveBulletsUp();
    moveBulletsDown();
}

function draw() {
    clearCanvas();
    drawPlayer();
    drawTime();
    drawBullets();
    playerMovement();
    moveBullets();
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