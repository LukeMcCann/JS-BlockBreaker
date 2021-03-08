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

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75; 
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

const bricks = [];

// for every column
// for every row
// create brick object with x and y coordinates
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0}
    }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            let brickX = (c*(brickWidth + brickPadding) + brickOffsetLeft);
            let brickY = (r*(brickHeight + brickPadding) + brickOffsetTop);
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = currentColor;
            ctx.fill();
            ctx.closePath();
        }
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();

    // Collision Detection
    if (y + dy < ballRadius) {
        dy = -dy;
        currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    } 
    else if (y + dy > (canvas.height - ballRadius)) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy
        } else {
            document.location.reload();        
            alert('Game Over!');
        }
    }
    if (x + dx > (canvas.width - ballRadius) || x + dx < ballRadius) {
        dx = -dx;
        currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    if (rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }

    if (leftPressed && paddleX > 0) {
        paddleX -= 7;
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
