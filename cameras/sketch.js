let mCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mCamera = createCapture(VIDEO);
  // do all but don't show stream
  mCamera.hide();
}

function draw() {
  background(220, 20, 120);
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
  
  mCamera.updatePixels();

  image(mCamera, 0, 0);
  
}
