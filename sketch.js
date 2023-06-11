let timeCount = 0;

let background1;
let background2;
let skyboat;
let gearImg;
let boats = [];

let x = 0;
let y = -350;

let steamBool = false;
let steamYBool = false;
let steamBgLayer = [];
let train = {x: 0, y: 0, speed: 0.5};

let steamBgm;
let steamBgmVolume = 1;
let trainBgm;

let a = 255;
let white_a = 255;
let word_a = 255;

var rdrop = new Array();
var dropSpeed = 10;

let worldLineYpos = -100;
let worldLine = [];
let worldLineBool = true;
let worldLineObj = {x: 0, y: 0};
let worldLineBgm;
let worldLineBgmVolume = 1;

let techFont;
let steamFont;
let cyberBgmVolume = 1;
let responseRings = [];

let cyberBool = false;
let cyberBglayer = [];
let cyberBgm;

let buildingLayer1 = [];
let buildingLayer2 = [];
//let buildingLayer3 = [];
//let buildingLayer4 = [];
let bridges = [];

let rDrop = [];
let rDropRings = [];

 

function preload() {
  // load any assets (images, sounds, etc.) here
  techFont = loadFont('assets/techno_board/TechnoBoard.ttf');
  steamFont = loadFont('assets/old_london/OldLondon.ttf');
  cyberFont = loadFont('assets/digital_7/digital-7.ttf');

  background1 = loadImage('assets/steampunk/Background1.png');

  steamBgLayer.push(loadImage('assets/steampunk/frontStationLayer1.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontStationLayer2.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontClockLayer1.png'));
  steamBgLayer.push(loadImage('assets/steampunk/backStationLayer1.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontCloudLayer1.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontFenceLayer1.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontFenceLayer2.png'));
  steamBgLayer.push(loadImage('assets/steampunk/trainLayer.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontFenceLayer3.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontCloudLayer2.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontClockLayer2.png'));
  steamBgLayer.push(loadImage('assets/steampunk/frontClockLayer2.png'));

  steamBgm = loadSound('assets/steampunk/2020-10-27_-_Classic_Love_Scene_-_www.FesliyanStudios.com_Steve_Oxen.mp3');
  trainBgm = loadSound('assets/steampunk/train-online-audio-converter.mp3');

  skyboat = loadImage('assets/steampunk/steamboat.png');
  gearImg = loadImage('assets/steampunk/gear.png');

  boats.push(boat = {x: 350, y: height/2+300, w: 0.5, h: 0.5 , scale: -1, speed: 0.9});
  boats.push(boat = {x: 0, y: height/2+500, w: 0.6, h: 0.6, scale: 1, speed: 1});
  boats.push(boat = {x: 1000, y: height/2+700, w: 1, h: 1 , scale: -1, speed: 1.1});
  boats.push(boat = {x: 0, y: height/2+150, w: 0.3, h: 0.3 , scale: 1, speed: 0.8});
  boats.push(boat = {x: 0, y: height+900, w: 0.2, h: 0.2 , scale: 1, speed: 0.8});
  boats.push(boat = {x: 0, y: height+1000, w: 0.3, h: 0.3 , scale: 1, speed: 0.8});
  
  for (let index = 0; index < 10; index++) {
    worldLine.push(random(1));
  }

  cyberBglayer.push(loadImage('assets/cyberpunk/building1.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/building2.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/building3.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/building4.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/bridge1.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/lightlayer1.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/neon1.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/background.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/sun.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/doodle1.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/lightlayer2.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/doodle2.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/neon2.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/neon1.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/neon3.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/neon3.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/neon4.png'));
  cyberBglayer.push(loadImage('assets/cyberpunk/neon4.png'));

  cyberBgm = loadSound('assets/cyberpunk/2016-02-02_-_A_New_Day_Is_Coming_-_David_Fesliyan.mp3');
  

  for (let index = 0; index < 20; index++) {
    buildingLayer1.push(building = {no : 1, x : 100 * random(1,2) * index});
  }
  for (let index = 0; index < 15; index++) {
    buildingLayer2.push(building = {no : 0, x : 550 * random(1,1.5) * index});
  }

  for (let index = 0; index < 6; index++) {
    bridges.push( -200 + 450 * index);
  }

  worldLineBgm = loadSound('assets/2018-07-02_-_Tears_of_Joy_-_David_Fesliyan.mp3');
  worldLineBgm.setVolume(1);
}

function setup() {
  // add your setup code here
  createCanvas(windowWidth,windowHeight);
  boats[1].x = width + 800;
  boats[3].x = width + 300;
  boats[4].x = width + 100;
  boats[5].x = width + 400;
  train.x = steamBgLayer[7].width*3+100;
  train.y = height + 90;

  background1.resize(windowWidth,windowHeight*1.5);
  steamBgLayer[7].resize(500,500);
  steamBgLayer[2].resize(1000,1000);
  steamBgLayer[10].resize(800,700);
  steamBgLayer[11].resize(600,500);
  steamBgLayer[9].resize(width/2,width/2);

  imageMode(CENTER);
  textAlign(CENTER);

  worldLineObj.x = width/4;
  worldLineObj.y = height/2;
  
  cyberBglayer[5].resize(width + 100, height*2);
  cyberBglayer[10].resize(width + 100, height*2);
  cyberBglayer[7].resize(width, height);
  cyberBglayer[3].resize(1300,1300);
  cyberBglayer[9].resize(900,900);
  cyberBglayer[11].resize(900, 900);
  cyberBglayer[8].resize(900, 900);
  cyberBglayer[2].resize(1800,1800);
  cyberBglayer[12].resize(900, 700);
  cyberBglayer[6].resize(800, 800);
  cyberBglayer[13].resize(200, 200);
  cyberBglayer[14].resize(200, 200);
  cyberBglayer[15].resize(900, 900);
  cyberBglayer[16].resize(200, 200);
  cyberBglayer[17].resize(1000, 1000);
  
  responseRings.push(responseRing = {x: worldLineObj.x, y :worldLineObj.y, r: 0});
  responseRings.push(responseRing = {x: width/2, y :height -100 + y, r: 0});
  responseRings.push(responseRing = {x: width/2, y :height/2 + 100, r: 0});

  for (var i = 0; i < 80; i++){
    rDrop.push(new Raindrop());
  } 

  worldLineBgm.play();
}

function draw() {
  timeCountStart();
  // add your draw code here
  //background(0,18,31);

  console.log(worldLineBgmVolume);

  steamBgm.setVolume(steamBgmVolume);
  worldLineBgm.setVolume(worldLineBgmVolume);
  cyberBgm.setVolume(cyberBgmVolume);

  if(steamBool == true && a <= 254){
    drawSteamWorld();
  }else if(steamBool == true && steamBgm.isPlaying())
    {
      if(steamBgmVolume <= 0)
        steamBgm.stop();
      trainBgm.stop();
    }
    
  if(cyberBool == true && a <= 254){
      drawCyberWorld();
    }else if(cyberBool == false && cyberBgmVolume <= 0)
      cyberBgm.stop();
  
  drawWorldline();
}

// when you hit the spacebar, what's currently on the canvas will be saved (as
// a "thumbnail.png" file) to your downloads folder. this is a good starting
// point for the final thumbnail of your project (this allows us to make a
// showcase of everyone's work like we did for the nametag assignment).
//
// remember that you need to resize the file to 1280x720, and you will probably
// want to delete this bit for your final submission.
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}

function drawSteamWorld(){

  

  if(steamYBool == true && y <= 0){
    y+= 0.1;
    updateResponse(responseRings[1]);
  }else if(y >= 0){
    worldLineBool = true;
  }

  if(!steamBgm.isPlaying() && a <= 5){
    steamBgmVolume = 1;
    steamBgm.play();
    trainBgm.play();
  }


  noStroke();

  drawSteamBackground();

  color1 = color(0,0,0,word_a);
  color2 = color(255, 203, 89,word_a);
  drawTitle(steamFont, color1, color2, "World of Steam");
}

function drawGear(xpos,ypos, size, rotation){
  push();
  translate(xpos, ypos + y);
  rotate(frameCount/500 * rotation);
  image(gearImg,0,0, windowHeight*size,windowHeight*size);
  pop();

}

function drawBoat(boat){

  push();

  scale(boat.scale, 1);
  image(skyboat, boat.x, boat.y + y, height * boat.w, height * boat.h);

  if(boat.scale == -1 && boat.x <= -width - 500)
    boat.x = 600 + random(500);
  else if(boat.scale == 1 && boat.x <= -500)
    boat.x = width + 450 + random(500);
  else
    boat.x -= boat.speed;
  pop();
  

}

function drawSteamBackground(){
  drawSteamSky();
  drawBoat(boats[3]);
  drawBoat(boats[0]);
  drawSteamGround();
  
}

function drawSteamSky(){

  image(background1,windowWidth/2,windowHeight/2 + y);

  fill(0,0,0,0);
  rect(0, 0, width, height);
}

function drawTrain(trainObj){
  if(trainObj.x >= 530)
    trainObj.x -= trainObj.speed;

  
  image(steamBgLayer[7],trainObj.x,trainObj.y - 3 + y);
}

function drawSteamGround(){

  drawGear(width/2-300,height/2 + 150,0.7,1);
  drawGear(width-100,height/2 + 250,0.5,-1);

  drawBoat(boats[4]);
  

  image(steamBgLayer[3],steamBgLayer[3].width/2-50,height + y);
  image(steamBgLayer[3],steamBgLayer[3].width * 1.5 - 100,height + y);
  image(steamBgLayer[3],steamBgLayer[3].width * 2.5- 150,height + y);

  drawBoat(boats[5]);

  image(steamBgLayer[4],steamBgLayer[4].width/2,height - 50 + y);
  image(steamBgLayer[4],steamBgLayer[4].width * 1.5 ,height - 50 + y);
  image(steamBgLayer[4],steamBgLayer[4].width * 2.5 ,height - 50 + y);
  
  drawGear(100,height,0.5,1);

  responseRings[1].y = height - 200 + y;
  drawResponse(responseRings[1]);

  noStroke();
  
  image(steamBgLayer[2],width/2,height -100 + y);

  

  push()
  translate(width/2-25,height -200 + y);
  rotate(frameCount/3600);
  image(steamBgLayer[10],0,0);
  pop()

  push()
  translate(width/2-25,height -200 + y);
  rotate(frameCount/216000);
  image(steamBgLayer[11],0,0);
  pop()

  push()
  scale(-1,1);
  image(steamBgLayer[9],-width/4,height -100 + y);
  pop();
  image(steamBgLayer[9],width*3/4,height -100 + y);
  
  
  drawBoat(boats[1]);

  drawGear(width/2+200,height + 300,0.6,1);

  image(steamBgLayer[4],steamBgLayer[4].width/2,height + y);
  image(steamBgLayer[4],steamBgLayer[4].width * 1.5,height + y);
  image(steamBgLayer[4],steamBgLayer[4].width * 2.5,height + y);

  drawGear(width/2+500,height + 250,0.2,-1);

  image(steamBgLayer[0],steamBgLayer[0].width/2,height + y);
  image(steamBgLayer[1],steamBgLayer[0].width + steamBgLayer[1].width/2,height + y);
  image(steamBgLayer[1],steamBgLayer[0].width + steamBgLayer[1].width * 1.5,height + y);

  drawBoat(boats[2]);

  drawTrain(train);

  image(steamBgLayer[5],steamBgLayer[5].width/2,height + y);
  image(steamBgLayer[6],steamBgLayer[5].width + steamBgLayer[6].width/2,height + y);
  image(steamBgLayer[8],steamBgLayer[5].width + steamBgLayer[8].width/2,height + y);
  image(steamBgLayer[6],steamBgLayer[5].width + steamBgLayer[6].width * 1.5,height + y);
  image(steamBgLayer[8],steamBgLayer[5].width + steamBgLayer[8].width * 1.5,height + y);
  
  
}


function drawWorldline(){

  responseRings[0].x = worldLineObj.x;
  responseRings[0].y = worldLineObj.y;

  if(!worldLineBgm.isPlaying() && a >= 255){

    worldLineBgm.play();
  }
      

  if(worldLineBool == false){
    drawWhiteoutScene();
  }

  if(worldLineYpos <= height + 100)
    worldLineYpos += 20;
  else{
    worldLineYpos = 0;
    
    for (let index = 0; index < 10; index++) {
      worldLine.shift();
      worldLine.push(random(1));
    }
  }

  noStroke();
  fill(0,18,31,a);
  rect(0, 0, width, height);

  stroke(0,77,50,a);
  strokeWeight(30);
  for (let index = 0; index < 10; index++) {
    line(index * (width/10), 0, index * (width/10), height);
    if(worldLine[index] <= 0.5){
      if(worldLine[index] <= 0.25)
        line(index*(width/10), worldLineYpos, (index+1) * (width/10), 100 + worldLineYpos);
      else
        line(index*(width/10), worldLineYpos, (index+1) * (width/10),  worldLineYpos- 100);
    }
      
  }
  
  stroke(0,77,137,a);
  strokeWeight(100);
  line(width/4, 0, width/4, height);
  line(width*3/4, 0, width*3/4, height);

  drawResponse(responseRings[0]);
  
  noStroke();
  fill(0,255,239,a);
  ellipse(worldLineObj.x, worldLineObj.y, 130, 130);

  
  fill(44,255,51);
  textBoard("Hello World", techFont, 150, 3,5, width/2, height/2);
  textBoard("have you ever image", techFont, 120, 6,15, width/2, height/2 -200);
  textBoard("what will future be like", techFont, 120, 10,16, width/2, height/2);
  textBoard("no matter in which century", techFont, 120, 13,17, width/2, height/2 + 200);
  textBoard("people", techFont, 120, 16,19, width/2, height/2-200);
  textBoard("cannot stop", techFont, 120, 17,20, width/2, height/2);
  textBoard("thinking about it", techFont, 120, 18,21, width/2, height/2+200);
  textBoard("IT IS ALWAYS", techFont, 120, 23,25, width/2, height/2);
  textBoard("TIMELESS ATTRACTION", techFont, 180, 29,35, width/2, height/2);
  textBoard("(= JIANAN WU =)", techFont, 60, 29,35, width/2, height/2 + 200);
  textBoard("** drag the CIRCLE **", techFont, 140, 36,45, width/2, height/2 - 200);
  textBoard("** find + click “PRESENT” **", techFont, 140, 37,46, width/2, height/2);
  textBoard("** push the TIME **", techFont, 140, 38,47, width/2, height/2 + 200);

  if(worldLineBool == false && a >= 0){
    a--;
    updateResponse(responseRings[0]);
    if(worldLineBgm.isPlaying() && worldLineBgmVolume >= 0)
      worldLineBgmVolume -= 0.01;
    else if(worldLineBgmVolume <= 0.1)
      worldLineBgm.stop();

  }else if(worldLineBool == true && a < 255){
    a++;
    resetResponse(responseRings[0]);

    if(steamBgm.isPlaying() && steamBgmVolume >= 0)
      steamBgmVolume -= 0.01;

    if(cyberBgm.isPlaying() && cyberBgmVolume >= 0)
      cyberBgmVolume -= 0.01;

  }else if(worldLineBool == true && a >= 255){

    if(steamBgm.isPlaying() && steamBgmVolume >= 0)
      steamBgmVolume -= 0.01;

    if(cyberBgm.isPlaying() && cyberBgmVolume >= 0)
      cyberBgmVolume -= 0.01;

    white_a = 255;
    word_a = 1300;
    y = -350;

    steamBool = false;
    steamYBool = false;
    train.x = steamBgLayer[7].width*3+100;

    cyberBool = false;

    resetResponse(responseRings[1]);
    resetResponse(responseRings[2]);

    if(worldLineBgmVolume <= 1)
      worldLineBgmVolume += 0.1;

    
  }

    
}


function mouseClicked(){
  if(worldLineBool == true && timeCount >= 47 && dist(mouseX, mouseY, worldLineObj.x, worldLineObj.y) <= 130 && a >= 255 && worldLineObj.x == width/4 && cyberBool == false && steamBool == false){
    worldLineBool = false;
    steamBool = true;
    //worldLineBgm.stop();
  }else if(worldLineBool == true && timeCount >= 47 && dist(mouseX, mouseY, worldLineObj.x, worldLineObj.y) <= 130 && a >= 255 && worldLineObj.x == width*3/4 && cyberBool == false && steamBool == false){
    worldLineBool = false;
    cyberBool = true;
    //worldLineBgm.stop();
  }
  else if(steamBool == true && white_a <= 50 && dist(mouseX, mouseY, width/2, height/2) <= height*0.8)
    steamYBool = true;
  else if(cyberBool == true && white_a <= 50 && mouseX >= width/2 - 350 && mouseX <= width/2 + 350 && mouseY >= height/2 && mouseY <= height/2 + 300)
    worldLineBool = true;
}

function textBoard(textContent, font, size, startTime, endTime, xPos, yPos){
  if(timeCount>= startTime && timeCount <= endTime){
    push()
    fill("black");
    textFont(font);
    textSize(size+ 3);
    textAlign(CENTER);
    text(textContent,xPos,yPos);
    pop();

    textFont(font);
    textSize(size);
    textAlign(CENTER);
    text(textContent,xPos,yPos);
    
  }
}

function timeCountStart(){
  if(frameCount%60 == 0)
    timeCount++;
}

function drawResponse(responseRing){
    
  noFill();
  strokeWeight(5);
  stroke(255,255,255);
  ellipse(responseRing.x, responseRing.y, responseRing.r, responseRing.r);
  

}

function updateResponse(responseRing){
  if(responseRing.r <= width * 2){
    responseRing.r += 100;
    responseBool = true;
  }
}

function resetResponse(responseRing){
  responseRing.r = 0;
}

function drawWhiteoutScene(){
  if(white_a >= 0)
    white_a -= 0.3;


  
  fill(255,255,255,white_a);
  rect(0, 0, width , height);
}

function mouseDragged(){
  if(dist(mouseX, mouseY, worldLineObj.x, worldLineObj.y) <= 150){
    worldLineObj.x = mouseX;
    worldLineObj.y = mouseY;
  }
    
}

function mouseReleased(){
  if(worldLineObj.x <= width/2)
    worldLineObj.x = width/4;
  else
    worldLineObj.x = width*3/4;

}

function drawTitle( font, color1, color2, content){
  if(word_a >= 0)
    word_a --;

  fill(color1);
  textFont(font);
  textSize(200);
  text(content, width/2, height/2);

  fill(color2);
  textFont(font);
  textSize(198);
  text(content, width/2, height/2);

}

function drawCyberWorld(){

  drawCyberBackground();

  
  noStroke();
  drawCyberClock();

  color1 = color(255,255,0,word_a);
  color2 = color(255, 0, 255,word_a);
  drawTitle(cyberFont, color1, color2, "World of Cyberpunk");


  if(worldLineBool == true){
    updateResponse(responseRings[2]);
  }

  if(!cyberBgm.isPlaying() && a <= 5){
    cyberBgmVolume = 1;
    cyberBgm.play();
  }

}

function drawCyberBackground(){
  background("black");
  
  image(cyberBglayer[7], width/2, height/2);
  image(cyberBglayer[8], width/2, height/2-150);

  image(cyberBglayer[10], width/2, height/2 - 500);
  image(cyberBglayer[2], width/2, height/2 + 100);
  image(cyberBglayer[5], width/2, height/2 - 100);

  for (let index = 0; index < buildingLayer2.length; index++) {
    image(cyberBglayer[buildingLayer2[index].no], buildingLayer2[index].x, height/2 + 10);
    
  }

  image(cyberBglayer[10], width/2, height/2 - 300);

  for (let index = 0; index < buildingLayer1.length; index++) {
    image(cyberBglayer[buildingLayer1[index].no], buildingLayer1[index].x, height/2 + 50);
    
  }
  image(cyberBglayer[5], width/2, height/2 - 300);
  
  fill("black");
  rect(0, height/2 + 200, width, 1000);

  image(cyberBglayer[5], width/2, height/2 - 300);

  drawResponse(responseRings[2]);
  noStroke();

  image(cyberBglayer[13], width/2 - 400, height/2 + 50);
  image(cyberBglayer[13], width/2 - 340, height/2 + 100);
  image(cyberBglayer[14], width/2 - 220, height/2 + 30);
  image(cyberBglayer[13], width/2 - 100, height/2 );
  image(cyberBglayer[16], width/2 + 20, height/2 + 60);
  image(cyberBglayer[13], width/2 + 110, height/2 - 50);
  image(cyberBglayer[13], width/2 + 190, height/2 + 10);
  image(cyberBglayer[16], width/2 + 300, height/2 - 60);
  image(cyberBglayer[13], width/2 + 500, height/2 + 50);
  image(cyberBglayer[13], width/2 + 440, height/2 + 100);

  for (let index = 0; index < bridges.length; index++) {
    image(cyberBglayer[4], bridges[index], height/2);
  }

  fill("black");
  //rect(0, height/2 + 300, width, 1000);
  
  image(cyberBglayer[10], width/2, height/2 - 300);
  image(cyberBglayer[3], 0+ 50, height/2 - 200);
  image(cyberBglayer[3], width, height/2 -200);

  rect(0, height/2 +340, width, 1000);
  image(cyberBglayer[9], width/2+ 10, height/2 - 120);
  image(cyberBglayer[11], width/2, height/2 - 150);

  strokeWeight(1);
  drawPuddle();

  image(cyberBglayer[15], width/2 + 600, height/2 - 150);
  image(cyberBglayer[6], width/2 - 400, height/2 - 150);
  image(cyberBglayer[17], width/2 - 550, height/2 + 350);
  image(cyberBglayer[6], width/2 + 750, height/2 + 200);
  
  for (var i = 0; i < rDrop.length; i++){
    strokeWeight(1);
    stroke(255, 204, 255);
    rDrop[i].drop();
  }

  
}

function drawCyberClock(){

  image(cyberBglayer[12], width/2 - 30, height/2 + 200);

  var minuteContent;
  if(minute() < 10)
    minuteContent = "0"+minute();
  else
    minuteContent = minute();

  var secondContent;
  if(second() < 10)
    secondContent = "0"+second();
  else
    secondContent = second();

  var textContent = minuteContent + " : " + secondContent;

  textFont(cyberFont);
  textSize(195);
  fill(0,255,255,100);
  text( textContent, width/2, height/2 + 200);
  
  textFont(cyberFont);
  textSize(200);
  fill(189,0,255,200);
  text( textContent, width/2, height/2 + 200);
}

function Raindrop() {
  this.len = round(random(50));
  this.x = round(random(width));
  this.y = -round(random(height));

  this.drop = function() {

    line(this.x, this.y, this.x, this.y + this.len);

    if (this.y < height - 150) 
      this.y += 10;
    else {
      rDropRings.push(dropRing = {xPos: this.x, yPos: this.y + random(10,100), r: 0, a: 255});
      this.x = round(random(width));
      this.y = -round(random(height));
      
    }
  }
}

function drawPuddle(){
  for( var i = 0; i < rDropRings.length; i++){
    stroke(200, 0, 200,rDropRings[i].a);
    noFill();
    ellipse(rDropRings[i].xPos, rDropRings[i].yPos, rDropRings[i].r, rDropRings[i].r * 0.5)
    if(rDropRings[i].r <= 500){
      rDropRings[i].r++;
      rDropRings[i].a-= 2;
    }
    else
      rDropRings.shift();
    
  }
}

