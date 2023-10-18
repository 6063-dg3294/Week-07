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
  image(mCamera, 0, 0);
}
