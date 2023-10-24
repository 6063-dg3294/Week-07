let mImg;

function preload() {
  mCamera = loadImage("./abaporu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mCamera.resize(0, height);

    // To load pixel arrays
  mCamera.loadPixels();
  print(mCamera.pixels.length);
  //change the image one except 3 million every frame
  noLoop();
}

function draw() {
  background(220, 20, 120);
  noStroke();

  mCamera.loadPixels();

  let spacing = 10;

  for (let y = 0; y < mCamera.height; y+= spacing){
    for (let x = 0; x < mCamera.width; x+= spacing){
      let pixelIndex = 4 * (y * mCamera.width + x);
      let redVal = mCamera.pixels[pixelIndex + 0];
      let greenVal = mCamera.pixels[pixelIndex + 1];
      let blueVal = mCamera.pixels[pixelIndex + 2];

      fill(redVal, greenVal, blueVal);
      // rect(x, y, spacing, spacing)
      ellipse(x, y, spacing, spacing)
  }
}
  
    
  // ask processing that update is completed 
  mCamera.updatePixels();

  // bring the image back here 


  
}
