
// const density = 'Ñ@W$9876543210?!oahkbdpqwunxrjft;:+=,._        '
const density = '01 '

let video
let asciiDiv

function vidLoad() {
    video.loop();
    video.volume(0);
}

function preload() {
    // video = createVideo("clip.mov", vidLoad)
}

function setup() {
    video = createCapture(VIDEO);
    video.size(100, 50)
    noCanvas()
    asciiDiv = createDiv()
}


function draw() {
    video.loadPixels()

    let asciiImage = ''
    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0]
            const g = video.pixels[pixelIndex + 1]
            const b = video.pixels[pixelIndex + 2]
            const avg = (r + g + b) / 3


            const len = density.length
            const charIndex = floor(map(avg, 0, 255, len, 0))

            const c = density.charAt(charIndex)
            if (c == " ") asciiImage += '&nbsp'
            else asciiImage += c
        }
        asciiImage += '<br/>'
        console.log(asciiImage)
    }
    asciiDiv.html(asciiImage)
}