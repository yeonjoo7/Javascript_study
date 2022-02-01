const files = [ 
    "cosmic-timetraveler--SFhuMwFClk-unsplash.jpg",
    "ddp-EX3gFC6eP4c-unsplash.jpg",
    "john-fowler-ooZfU1oyS7E-unsplash.jpg",
    "michelle-spollen-dC2FsjoXsPQ-unsplash.jpg",
    "shot-by-cerqueira-8qH4GSYBiSA-unsplash.jpg",
    "sylwia-bartyzel-eU4pipU_8HA-unsplash.jpg",
    "anderson-rian-P9q5aGTt3FE-unsplash.jpg"
]

const selectedImg = files[Math.floor(Math.random()* files.length)]

document.body.style.backgroundImage = `url(img/${selectedImg})`;
// const bgImg = document.createElement("img")
// bgImg.src = `img/${selectedImg}`
// bgImg.alt = "background image"
// bgImg.id = "bgImg"

// document.body.appendChild(bgImg)