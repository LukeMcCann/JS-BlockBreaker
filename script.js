const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

setInterval(draw, 10);

// center horizontally
let x = canvas.width/2;
// line up 30px from bottom
let y = canvas.height - 30;

let dx = 2;
let dy = -2;
const ballRadius = 10;

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // if y position of ball + the direction travelled is less than 0
    // reverse direction of ball
    if (y + dy < 0) {
        dy = -dy;
    }

    // if y position of ball + the direction travelled is greater than the height of the canvas
    // reverse direction of ball
    if (y + dy > canvas.height) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}