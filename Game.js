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
var Score = 0;
var ObjectiveX = 32 + (Math.random() * (canvasWidth - 64));
var ObjectiveY = 32 + (Math.random() * (canvas.height - 64));
var ObjSize = 40;
var bulletsRight = [];
var bulletsLeft = [];
var bulletsUp = [];
var bulletsDown = [];

function drawPlayer() {
    ctx.fillStyle = "#0099FF"
    ctx.beginPath()
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    ctx.stroke()
}

function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+Score, 20, 35);
}

function drawObjective() {
    ctx.fillStyle = "#FFFF00"
    ctx.beginPath()
    ctx.fillRect(ObjectiveX, ObjectiveY, ObjSize, ObjSize);
}

function Reset() {
    ObjectiveX = 32 + (Math.random() * (canvasWidth - 64));
	ObjectiveY = 32 + (Math.random() * (canvasHeight - 64));
}

function drawBulletsRight() {

    if (bulletsRight.length < 4) {
        if (bulletsRight.length == 0 || (bulletsRight.length != 0 && bulletsRight[bulletsRight.length-1].x > 360) ) {
            var newY = Math.floor(Math.random() * canvasHeight - bulletSize);
            bulletsRight.push({x: 0, y: newY, w: bulletSize, h: bulletSize});
        }
    }

    bulletsRight.forEach(bullet => {
        if (bullet.x + bullet.w > canvasWidth) {
            bulletsRight.shift();
        }
        ctx.fillStyle = "#000000"
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    });
}

function drawBulletsLeft() {

    if (bulletsLeft.length < 4) {
        if (bulletsLeft.length == 0 || bulletsLeft.length != 0 && bulletsLeft[bulletsLeft.length-1].x < 360) {
            var newY = Math.floor(Math.random() * canvasHeight - bulletSize);
            bulletsLeft.push({x: canvasWidth, y: newY, w: bulletSize, h: bulletSize});
        }
    }

    bulletsLeft.forEach(bullet => {
        if (bullet.x + bulletSize < 0) {
            bulletsLeft.shift();
        }
        ctx.fillStyle = "#000000"
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    });
}

function drawBulletsUp() {
    if (bulletsUp.length < 4) {
        if (bulletsUp.length == 0 || bulletsUp.length != 0 && bulletsUp[bulletsUp.length-1].y > 250) {
            var newX = Math.floor(Math.random() * canvasWidth - bulletSize);
            bulletsUp.push({x: newX, y: 0, w: bulletSize, h: bulletSize});
        }
    }

    bulletsUp.forEach(bullet => {
        if (bullet.y + bulletSize > canvasHeight) {
            bulletsUp.shift();
        }
        ctx.fillStyle = "#000000"
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    });
}

function drawBulletsDown() {
    if (bulletsDown.length < 4) {
        if (bulletsDown.length == 0 || bulletsDown.length != 0 && bulletsDown[bulletsDown.length-1].y < 250) {
            var newX = Math.floor(Math.random() * canvasWidth - bulletSize);
            bulletsDown.push({x: newX, y: canvasHeight, w: bulletSize, h: bulletSize});
        }
    }

    bulletsDown.forEach(bullet => {
        if (bullet.y + bulletSize < 0) {
            bulletsDown.shift();
        }
        ctx.fillStyle = "#000000"
        ctx.beginPath()
        ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
        ctx.stroke();
    });
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

function CollisionDetectionObjective() {
    if (
        playerX <= (ObjectiveX + ObjSize) &&
        ObjectiveX <= (playerX + playerWidth) &&
        playerY <= (ObjectiveY + ObjSize) &&
        ObjectiveY <= (playerY + playerHeight)
    ) {
        ++Score;
        Reset();
    }
}

function CollisionDetectionBullets() {
    if (
        playerX <= (bullet.x + bulletSize) &&
        bullet.x <= (playerX + playerWidth) &&
        playerY <= (bullet.y + bulletSize) &&
        bullet.y <= (playerY + playerHeight) 
    ) {
        let LBName = prompt("You Died! Enter Name!");
        ResetAll();
    }
}

function ResetAll() {
    Reset();
    playerX = 335;
    playerY = 250;
    Score = 0;
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;
}

function draw() {
    clearCanvas();
    drawPlayer();
    drawBullets();
    drawObjective();
    playerMovement();
    moveBullets();
    drawScore();
    CollisionDetectionObjective();
    // CollisionDetectionBullets();
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