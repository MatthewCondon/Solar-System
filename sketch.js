var orbitCenterX = 500;
var orbitCenterY = 500;
var orbitRadius = 10;
var angle = 0;
var speed = 0.001;

var length = 1;
let pg;
var s = [];

var r;
var g;
var b;

function setup() {
  createCanvas(1000, 1000);

  for (var i = 0; i < 100; i += 4) {
    for (var j = 0; j < 100; j += 4) {
      push();
      //translate(width / 2, height / 2);
      //rotate(0.5);
      s.push(new Star(i, j));
      pop();
    }
  }
}

function draw() {
  //basic stuff
  background(0);
  for (var i = 0; i < 100; i++) {
    s[i].display();
  }
  noStroke();
  noFill();
  strokeWeight(0.2);
  stroke(158, 158, 158);
  ellipse(orbitCenterX, orbitCenterY, 100, 100); //mercury orbit
  ellipse(orbitCenterX, orbitCenterY, 180, 180); //venus orbit
  ellipse(orbitCenterX, orbitCenterY, 260, 260); //earth orbit
  ellipse(orbitCenterX, orbitCenterY, 340, 340); // mars orbit
  ellipse(orbitCenterX, orbitCenterY, 500, 500); // jupiter orbit
  ellipse(orbitCenterX, orbitCenterY, 650, 650); //saturn orbit
  ellipse(orbitCenterX, orbitCenterY, 800, 800); //uranus orbit
  ellipse(orbitCenterX, orbitCenterY, 950, 950); //neptune orbit

  noStroke();
  fill(252, 186, 3);
  ellipse(orbitCenterX, orbitCenterY, 80, 80);

  r = random(255);
  g = random(255);
  b = random(255);

  mercury();
  venus();
  earth();
  mars();
  jupiter();
  saturn();
  uranus();
  neptune();

  //asteroids();
}

function mercury() {
  fill(159, 161, 159);
  for (var i = 1; i < 2; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos(2 * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin(2 * angle * i);

    ellipse(x, y, 5, 5);
  }
  angle += speed;
}
function venus() {
  fill(184, 125, 53);
  for (var i = 2; i < 3; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos((1 / 2) * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin((1 / 2) * angle * i);

    ellipse(x, y, 11, 11);
    angle += speed;
  }
}
function earth() {
  fill(51, 161, 181);
  for (var i = 3; i < 4; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos((1 / 4) * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin((1 / 4) * angle * i);

    ellipse(x, y, 13, 13);
    angle += speed;
  }
}
function mars() {
  fill(148, 19, 36);
  for (var i = 4; i < 5; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos((1 / 8) * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin((1 / 8) * angle * i);

    ellipse(x, y, 12, 12);
    angle += speed;
  }
}
function jupiter() {
  fill(237, 189, 116);
  for (var i = 6; i < 7; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos((1 / 64) * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin((1 / 64) * angle * i);

    ellipse(x, y, 33, 33);
    fill(176, 41, 26);
    ellipse(x + 5, y + 5, 12, 8);
    angle += speed;
  }
}
function saturn() {
  for (var i = 7.9; i < 8.9; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos((1 / 128) * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin((1 / 128) * angle * i);

    noFill();
    strokeWeight(1);
    stroke(150, 169, 217);
    ellipse(x, y, 70, 20);
    ellipse(x, y + 1, 70, 20);
    ellipse(x, y - 1, 70, 30);
    ellipse(x, y - 2, 70, 20);
    ellipse(x, y + 2, 70, 30);
    ellipse(x, y - 3, 70, 20);
    ellipse(x, y + 2, 70, 30);

    fill(219, 191, 147);
    ellipse(x, y, 23, 23);
    angle += speed;
  }
}
function uranus() {
  fill(182, 193, 219);
  for (var i = 9.75; i < 10.75; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos((1 / 256) * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin((1 / 256) * angle * i);

    ellipse(x, y, 20, 20);
    angle += speed;
  }
}
function neptune() {
  noStroke();
  fill(76, 121, 224);
  for (var i = 11.65; i < 12.65; i++) {
    var x = orbitCenterX + (orbitRadius + i * 40) * cos((1 / 512) * angle * i);
    var y = orbitCenterY + (orbitRadius + i * 40) * sin((1 / 512) * angle * i);

    ellipse(x, y, 20, 20);
    angle += speed;
  }
}

//stars in the background
class Star {
  constructor(x, y) {
    this.x = random(width);
    this.y = random(height);
  }

  display() {
    strokeWeight(5);
    stroke(255);
    beginShape();
    push();
    ellipse(this.x, this.y, 1, 1);
    pop();
    endShape();
  }
}
