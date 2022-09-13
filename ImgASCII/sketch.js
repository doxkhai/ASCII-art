
// const density = 'Ñ@W$9876543210?!abc;:+=,._    '
// const density = '01 '
const density = '@BWM01oahk(),.   '

let img
let asciiDiv

function preload() {
    img = loadImage('img/em.jpg')
}

function setup() {
    noCanvas()
    asciiDiv = createDiv()
}

function draw() {
    background(0);

    img.loadPixels()

    let asciiImg = ''
    for (let j = 0; j < img.height; j++) {
        for (let i = 0; i < img.width; i++) {
            const pixelIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixelIndex + 0]
            const g = img.pixels[pixelIndex + 1]
            const b = img.pixels[pixelIndex + 2]
            const avg = (r + g + b) / 3

            const len = density.length
            const charIndex = floor(map(avg, 0, 255, len, 0))


            const c = density.charAt(charIndex)
            if (c == ' ') asciiImg += '&nbsp;'
            else asciiImg += c
        }
        asciiImg += '<br/>'
    }
    asciiDiv.html(asciiImg)
}