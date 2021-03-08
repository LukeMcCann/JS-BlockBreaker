const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

setInterval(draw, 10);

let currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
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

    // Collision Detection
    if ( y + dy > canvas.height || y + dy < 0) {
        dy = -dy;
        currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    if (x + dx > canvas.width || x + dx < 0) {
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