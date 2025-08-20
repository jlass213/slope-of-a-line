const form = document.getElementById('line-form');
const canvas = document.getElementById('line-canvas');
const ctx = canvas.getContext('2d');

function drawLine(m, b) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw axes
    ctx.strokeStyle = '#888';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();

    // Draw line y = mx + b
    ctx.strokeStyle = '#0074D9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // x from -10 to 10
    let x1 = -10, x2 = 10;
    let y1 = m * x1 + b;
    let y2 = m * x2 + b;
    // Convert to canvas coordinates
    function toCanvas(x, y) {
        // x: -10 to 10 maps to 0 to 500
        // y: -10 to 10 maps to 500 to 0 (invert y)
        return [
            (x + 10) * 25,
            500 - ((y + 10) * 25)
        ];
    }
    const [cx1, cy1] = toCanvas(x1, y1);
    const [cx2, cy2] = toCanvas(x2, y2);
    ctx.moveTo(cx1, cy1);
    ctx.lineTo(cx2, cy2);
    ctx.stroke();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const m = parseFloat(document.getElementById('slope').value);
    const b = parseFloat(document.getElementById('intercept').value);
    drawLine(m, b);
});

drawLine(1, 0); // Initial plot
