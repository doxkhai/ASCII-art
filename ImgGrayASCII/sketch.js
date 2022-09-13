
const density = 'Ñ@W$9876543210?!abc;:+=,._ '
let img
let video

function preload() {
    img = loadImage('./img/IMG_0573.jpg')
}

function setup() {
    createCanvas(450, 600);
}

function draw() {
    background(0);

    let w = width / img.width
    let h = height / img.height

    img.loadPixels()

    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            const pixelIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixelIndex + 0]
            const g = img.pixels[pixelIndex + 1]
            const b = img.pixels[pixelIndex + 2]
            const avg = (r + g + b) / 3

            noStroke()
            fill(avg)
            // square(i*w, j*h, w)
            const len = density.length
            const charIndex = floor(map(avg, 0, 255, len, 0))

            textSize(w)
            textAlign(CENTER, CENTER)
            text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5)
        }
    }
}