let mCamera;

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
  mCamera.loadPixels();
  background(220, 20, 120);
  // image(mImg, 0, 0);
  // image(mImg, (width - mImg.width)/2, 0);

  for (let vi = 0; vi < mCamera.pixels.length; vi += 4){
    let redVal = mCamera.pixels[vi + 0];
    let greenVal = mCamera.pixels[vi + 1];
    let blueVal = mCamera.pixels[vi + 2];
    let alphaVal = mCamera.pixels[vi + 3];

    let maxVal = max(redVal, greenVal, blueVal);
    if(maxVal == redVal){

      mCamera.pixels[vi + 0] = 255;
    } else if (maxVal == greenVal){
      mCamera.pixels[vi + 1] = 255;
    } else {
      mCamera.pixels[vi + 2] = 255;
    }
  }
  // ask processing that update is completed 
  mCamera.updatePixels();

  // bring the image back here 
  
  image(mCamera, (width - mCamera.width)/2, 0);


}
