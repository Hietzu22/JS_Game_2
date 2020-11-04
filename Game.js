var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var playerWidth = 50;
var playerHeight = 50;
var time = 0

function drawPlayer() {
    ctx.beginPath()
    ctx.fillRect(335, 225, playerWidth, playerHeight);
    ctx.stroke()
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score: "+score, 8, 20);
    }

function draw() {
    drawPlayer();
    ctx-clearRect(0, 0, canvas.width, canvas.height);

}