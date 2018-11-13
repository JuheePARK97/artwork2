
var systems;

function setup() {
  createCanvas(450, 600);
  systems = [];
}

function draw() {
  background(51);
  background(0);
  for (i = 0; i < systems.length; i++) {
    systems[i].run();
    systems[i].addParticle();
  }
  if (systems.length==0) {
    fill(10,40,72);
    textAlign(CENTER);
    textSize(32);
    text("click mouse to add aqua waves", width/2, height/2);
  }
}

function mousePressed() {
  this.p = new ParticleSystem(createVector(mouseX, mouseY));
  systems.push(p);
}


var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 1;
};


Particle.prototype.display = function () {
  stroke(200, this.lifespan);
  strokeWeight(104);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};


Particle.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  if (int(random(5, 2)) == 0) {
    p = new Particle(this.origin);
  }
  else {
    p = new CrazyParticle(this.origin);
  }
  this.particles.push(p);
};

ParticleSystem.prototype.run = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};



function CrazyParticle(origin) {
 
  Particle.call(this, origin);


  this.theta = 0.0;
};


CrazyParticle.prototype = Object.create(Particle.prototype); 
CrazyParticle.prototype.constructor = CrazyParticle;


CrazyParticle.prototype.update=function() {
  Particle.prototype.update.call(this);

  this.theta += (this.velocity.x * this.velocity.mag()) / 20.0;
}


CrazyParticle.prototype.display=function() {

  Particle.prototype.display.call(this);

  push();
  translate(this.position.x, this.position.y);
  rotate(this.theta);
  stroke(255,this.lifespan);
  line(0,0,25,0);
  pop();
}
