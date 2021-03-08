const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

setInterval(draw, 10);

// center horizontally
let x = canvas.width/2;
// line up 30px from bottom
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;
}