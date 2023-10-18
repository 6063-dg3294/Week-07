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
  mImg.loadPixels();
  background(220, 20, 120);
  // image(mImg, 0, 0);
  // image(mImg, (width - mImg.width)/2, 0);

  for (let vi = 0; vi < mImg.pixels.length; vi += 4){
    let redVal = mImg.pixels[vi + 0];
    let greenVal = mImg.pixels[vi + 1];
    let blueVal = mImg.pixels[vi + 2];
    let alphaVal = mImg.pixels[vi + 3];

    let maxVal = max(redVal, greenVal, blueVal);
    if(maxVal == redVal){

      mImg.pixels[vi + 0] = 255;
    } else if (maxVal == greenVal){
      mImg.pixels[vi + 1] = 255;
    } else {
      mImg.pixels[vi + 2] = 255;
    }
  }
  // ask processing that update is completed 
  mImg.updatePixels();

  // bring the image back here 
  
  image(mImg, (width - mImg.width)/2, 0);


}
