class Sprite{
  constructor(_x, _y, _imgs){
    this.x = _x;
    this.y = _y;
    this.imgs = _imgs;
    this.imgIndex = 0;
    // specifies the delay between frames
    this.delay = 100;
    this.lastUpdated = 0;

  }
  draw(){
    let mImg = this.imgs[this.imgIndex];
    image(mImg, this.x, this.y);
    this.imgIndex = (this.imgIndex + 1);
    if (this.imgIndex >= this.imgs.length){
      this.imgIndex = 0;
    }
  }
}

let spriteInfo = [
  { name: "finn", imgCnt: 7, imgs: [] },
  { name: "ice-king", imgCnt: 6, imgs: [] },
  { name: "jake", imgCnt: 6, imgs: [] },
  { name: "princess-muscles", imgCnt: 7, imgs: [] },
];

function preload() {
  for (let si = 0; si < spriteInfo.length; si++) {
    for (let ii = 0; ii < spriteInfo[si].imgCnt; ii++) {
      let sName = spriteInfo[si].name;
      let sImg = loadImage("./sprites/"+sName+"/tile00"+ii+".png");
      spriteInfo[si].imgs.push(sImg);
    }
  }
}

let mSprites = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);

  for (let i = 0; i < mSprites.length; i++){
    mSprites[i].draw();
  }

  // let character = spriteInfo[0];
  // let charImgs = character.imgs;
  // for (let i = 0; i < charImgs.length; i++){
  //   let xy = map(i, 0, charImgs.length, 0, height);
  //   image(charImgs[i], xy, xy);

  }

function mouseClicked(){
  let chosenSprite = random(spriteInfo);
  mSprites.push(new Sprite(mouseX, mouseY, chosenSprite.imgs))
}
