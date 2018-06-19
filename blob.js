var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

/*var yourNumberForm = document.getElementById('yourNumber');
var yourNumber2Form = document.getElementById('yourNumber2');
var yourNumber3Form = document.getElementById('yourNumber3');
var yourNumber4Form = document.getElementById('yourNumber4');
var yourNumber5Form = document.getElementById('yourNumber5');
var yourNumber6Form = document.getElementById('yourNumber6');*/

var n1 = 9;
var n5= 100;
var n3 = -4;
/*var n2 = done 시간마다
var n4 = 100
var n6 = 0.01
var n7 = 0.03*/
var n8 =1000 //스트링탄성

if(!localStorage.getItem('loc')) {
  
} else {
  setStyles();
}
/*if(!localStorage.getItem('yourNumber2')) {
  
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber3')) {
  
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber4')) {
  
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber5')) {
  
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber6')) {
  
} else {
  setStyles();
}*/


function setStyles() {
  var currentNumber= localStorage.getItem('yourNumber');
  var currentNumber2= localStorage.getItem('yourNumber2');
  var currentNumber3= localStorage.getItem('loc3');
  var currentNumber4= localStorage.getItem('yourNumber4');
  var currentNumber5= localStorage.getItem('loc5');
  var currentNumber6= localStorage.getItem('loc6');
  var currentNumber7= localStorage.getItem('loc7');
  var currentNumber8= localStorage.getItem('loc');



  //document.getElementById('yourNumber').value = currentNumber;
  n8 = currentNumber8;
  console.log("n1"+n1);

  n5 = currentNumber5;
  n3 = currentNumber3;
  n1 = currentNumber;
  n2 = currentNumber2;
  n4 = currentNumber4;
  n6 = currentNumber6;
  n7 = currentNumber7;

}


var physics;
var blobs =[];
var repeler;
var w = 1500;
var h = 800;



function setup() {
  createCanvas(w, h);

  // Initialize the physics
  physics = new VerletPhysics2D();
  physics.setDrag(n7);

  //마우스에 반응하도록 마우스 위치에 repulsion 설정
  console.log(n3);
  repeler = new Particle(new Vec2D(mouseX, mouseY), n5, 50, n3*(-1));

  //blob이 캔버스 외부로 나가지 않도록 bounds 설정
  physics.setWorldBounds(new Rect(0,0,w,h));

  //blob 추가하기
  //blobs.push(new Blob(반지름, 중심 x좌표, 중심 y좌표));
  //자바스크립트가 물리엔진을 계산하기에 충분히 빠르지가 않아서 3개 이상 추가하시면 움직임이 느려져요... 흑흑
  blobs.push(new Blob(n1*40,w/2,h/2));

  //blobs.push(new Blob(50,w/2+200,h/2));
  //blobs.push(new Blob(50,w/2-200,h/2));


}

function draw() {

  physics.update();

  repeler.set(mouseX,mouseY);

  //배경색 바꾸기
  background(38,38,38);

  //blob 그리기
  //선 색 바꾸기 - stroke(red,green,blue,alpha);
  noStroke();
  
  //stroke(255,255,255,255);
  //blob 내부 색 바꾸기 - stroke(red,green,blue,alpha);
  fill(random(0, 256), random(0, 256), random(0, 256), n6);


  //fill(random(0, 256), random(0, 256), random(0, 256))


  // seconds로 시간마다 살아있는 것처럼 움직이는 blob 만들기 - 스프링을 주기적으로(sin함수 사용) 늘이고 줄이고 해서
  seconds = millis() / n2*45;

  for (var i = 0; i <blobs.length; i++) {
    blobs[i].drawblob(seconds);

    //particle들을 실제로 보고 싶다면 하단 주석 해제
    //blobs[i].showParticles();

    //spring을 실제로 보고 싶다면 하단 주석 해제
    //blobs[i].showSpring();
  };


}



//////////////////////////
//Blob 클래스 정의
//////////////////////////

function Blob(r,coX,coY){
  this.particles = [];
  this.springs = [];

  for (var i = 0; i < 50; i++) {

    //원형으로 blob 을 둘러싸고 있는 점(particle) 배치하기
    //Particle(particle의 초기 좌표, 반지름, 영향 범위, attraction 정도);
    var x = r * Math.cos( Math.PI*2/50*i ) + coX;
    var y = r * Math.sin( Math.PI*2/50*i ) + coY;
    this.particles.push(new Particle(new Vec2D(x, y), 4, 80, -0.1));
    
  }
  //blob을 한 점에 고정하기 위한 attractor배치
  this.attractor = new Particle(new Vec2D(coX, coY), r, r, n6);
  this.attractor.lock();

  //blob의 shape을 유지하기 위해 3단계의 spring배치
  //VerletSpring2D(spring 의 한 쪽 끝, spring의 다른 쪽 끝, spring의 초기 길이, spring의 탄성);
  for (var i = 0; i < 50; i++) {
    //스프링 정의하기
    var spring1 = new VerletSpring2D(this.particles[i], this.particles[(i + 1) % this.particles.length], 2*Math.PI, n8);
    this.springs.push(spring1);
    //물리세계(physics)에 넣기
    physics.addSpring(spring1);
    if (i % 2 == 0) {
      var spring2 = new VerletSpring2D(this.particles[i], this.particles[(i + 25) % this.particles.length], r*2, 0.0001);
      this.springs.push(spring2);
      physics.addSpring(spring2);
    }
  if (i % 1 == 0) {
    var spring2 = new VerletSpring2D(this.particles[i], this.attractor, r, 0.00001);
    this.springs.push(spring2);
    physics.addSpring(spring2);
  }

  }

}

Blob.prototype = {
  drawblob: function(s){

      beginShape();
      for (var i = 0; i < this.particles.length; i++) {
        vertex(this.particles[i].x, this.particles[i].y);
        this.particles[i].behavior.radius = 130 + 80 * sin(s + i / 30.0);
        this.particles[i].behavior.radiusSquared = this.particles[i].behavior.radius * this.particles[i].behavior.radius;
      }
      endShape(CLOSE);

  },

  showSpring: function(){
    for (var i = 0; i < this.springs.length; i++) {
      stroke(0,255,0);
      strokeWeight(1);
      line(this.springs[i].a.x, this.springs[i].a.y, this.springs[i].b.x, this.springs[i].b.y);
    }
  },

  showParticles: function(){
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}