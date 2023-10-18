let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height);

    // To load pixel arrays
  mImg.loadPixels();
  print(mImg.pixels.length);
  //change the image one except 3 million every frame
  noLoop();
}

function draw() {
  background(220, 20, 120);
  noStroke();

  mImg.loadPixels();

  let spacing = 10;

  for (let y = 0; y < mImg.height; y+= spacing){
    for (let x = 0; x < mImg.width; x+= spacing){
      let pixelIndex = 4 * (y * mImg.width + x);
      let redVal = mImg.pixels[pixelIndex + 0];
      let greenVal = mImg.pixels[pixelIndex + 1];
      let blueVal = mImg.pixels[pixelIndex + 2];

      fill(redVal, greenVal, blueVal);
      // rect(x, y, spacing, spacing)
      ellipse(x, y, spacing, spacing)
  }
}
  
    
  // ask processing that update is completed 
  mImg.updatePixels();

  // bring the image back here 


  
}
