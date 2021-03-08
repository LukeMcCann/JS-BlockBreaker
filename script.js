const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
// center horizontally
let x = canvas.width/2;
// line up 30px from bottom
let y = canvas.height - 30;

let dx = 2;
let dy = -2;
const ballRadius = 10;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = ((canvas.width - paddleWidth)/2);

let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler() {
    if (e.keyCode == 39) {
        rightReleased = false;
    } else if (e.keyCode == 37) {
        leftReleased = false;
    }
}

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    // Collision Detection
    if ( y + dy > (canvas.height - ballRadius) || y + dy < ballRadius) {
        dy = -dy;
        currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    if (x + dx > (canvas.width - ballRadius) || x + dx < ballRadius) {
        dx = -dx;
        currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    x += dx;
    y += dy;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = currentColor;
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = currentColor;
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);
