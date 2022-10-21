// A simple Lorenz Attractor renderer
// Change the parameters for different results!
// by @liabru - http://brm.io

function randrange(min, max) {
    return Math.random() * (max - min) + min;
}

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    sigma = 10,
    rho = 28,
    beta = 8 / 3,
    dt = 0.001,
    x0 = randrange(-10, 10),
    y0 = randrange(-10, 10),
    z0 = randrange(0, 20),
    x1,
    y1,
    z1,
    cx = 250,
    cy = 500,
    scale = -10,
    n = 2 * (10 ** 6),
    i = 0;

function loop() {
    for (var k = 0; k < 20; k += 1) {
        x1 = x0 + dt * (sigma * (y0 - x0));
        y1 = y0 + dt * (x0 * (rho - z0) - y0);
        z1 = z0 + dt * (x0 * y0 - beta * z0);

        context.strokeStyle = "hsl(" + (i / (n * 10 ** (-1.2))) * 360 + ", 100%, 50%)";

        context.beginPath();
        context.moveTo(cx + x0 * scale, cy + z0 * scale);
        context.lineTo(cx + x1 * scale, cy + z1 * scale);
        context.stroke();

        x0 = x1;
        y0 = y1;
        z0 = z1;

        i += 1;
    }
    window.setTimeout(loop, 20);
}

loop()
