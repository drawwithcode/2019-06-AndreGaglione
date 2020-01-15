/* let rSlider, gSlider, bSlider;
var foo;
var frase = 0;
var button = [];

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  noStroke();
  foo = new p5.Speech();// speech synthesis object
  foo.setVoice("Fred");
  foo.setLang("en-US");

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);

  // create button
  button[frase] = createButton("hey Travis let's do some music");
  button[frase].size(100, 100);
  button[frase].position(windowWidth/2 - 50, windowHeight/2 - 50);
  button[frase].mousePressed(click);

  // create speech callback
  bSlider.mousePressed(Parlab);
  gSlider.mousePressed(Parlag);
  rSlider.mousePressed(Parlar);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('background red', rSlider.x * 2 + rSlider.width, 35);
  text('background green', gSlider.x * 2 + gSlider.width, 65);
  text('background blue', bSlider.x * 2 + bSlider.width, 95);
}

function click(){
	if(frase === 0){
		foo.speak("damn bro i got some ideas flushing in my head");
		frase++;
		button[frase] = createButton("Why are you doing this");
		button[frase].style('font-size','20px');
		button[frase].size(130, 130);
  		button[frase].position(windowWidth/2 - 65, windowHeight/2 - 65);
		button[frase].mousePressed(click);
	} else if(frase === 1){
		foo.speak("I have a boyfriend");
		frase++;
		button[frase] = createButton("Help");
		button[frase].style('font-size','30px');
		button[frase].size(200, 200);
  		button[frase].position(windowWidth/2 - 100, windowHeight/2 - 100);
		button[frase].mousePressed(click);
	} else if (frase === 2){
		foo.speak("I'll call the cops");
		frase++;
		button[frase] = createButton("911");
		button[frase].style('font-size','50px');
		button[frase].size(300, 300);
  		button[frase].position(windowWidth/2 - 150, windowHeight/2 - 150);
		button[frase].mousePressed(click);
	} else if (frase === 3){
		foo.speak("This is enough");
		frase++;
		button[frase] = createButton("I'll have you arrested");
		button[frase].style('font-size','100px');
		button[frase].size(500, 500);
  		button[frase].position(windowWidth/2 - 250, windowHeight/2 - 250);
	} else if (frase ===4){
		button[frase].mousePressed(window.open("https://www.youtube.com/watch?v=zHC3uvzcfV0"));
	}
}

function Parlab(){
	foo.speak("damn");
}

function Parlar(){
	foo.speak("that's lit");
}

function Parlag(){
	foo.speak("eskere");
}
*/

var foo;

function preload() {
  foo = new p5.Speech();// speech synthesis object
  foo.setVoice("Fred");
  foo.setLang("en-US");
  img1 = loadImage('travis1.jpeg');
  img2 = loadImage('travis2.jpeg');
  img3 = loadImage('travis3.jpeg');
  img4 = loadImage('travis4.jpeg');
  img5 = loadImage('travis5.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("hey Travis let's do some music together");
  button.position(windowWidth/2 - 80, windowHeight/2);
  button.size(160, 40);
  image(img1,600,50,320,240);
  button.mousePressed(starthere);
}

function draw() {
}

function starthere() {
  button.remove();
  secButton = createButton("Make a string melody");
  secButton.position(100, 50);
  secButton.size(170, 40);
  foo.speak("damn bro i got some ideas flushing in my head");
  image(img2,600,50,320,240);
  secButton.mousePressed(secondStep);
}

function secondStep() {
  secButton.remove();
  sel = createSelect();
  sel.option("Repeat the line");
  sel.option('Roll a joint');
  sel.option('Call Kanye');
  sel.position(windowWidth/2 + 100, 300);
  sel.size(300, 40)
    image(img3,600,50,320,240);
  foo.speak("Jesus... Those strings bring me to Paradise, but bro i need you give me more soul");
  sel.changed(thirdStep);
}

function thirdStep() {
  sel.remove();
  trdButton = createButton("give him some chicken wings");
  trdButton.position(50, windowHeight/2 + 350);
  trdButton.size(140, 40);
    image(img4,600,50,320,240);
  foo.speak("eh eh eh, this way my G");
  trdButton.mousePressed(magic);
}

function magic() {
  trdButton.remove();
  sel2 = createSelect();
  sel2.position(windowWidth/2 + 100, 300);
  sel2.size(300, 40)
  sel2.option("Travis is collapsed");
  sel2.option('Finish the song');
  sel2.option('Call Kanye');
  foo.speak("GORGEOUS");
  image(img5,600,50,320,240);
  sel2.changed(lastButton);
}

function thirdStep() {
  sel.remove();
  lastButton = createButton("give him some chicken wings");
  lastButton.position(50, windowHeight/2 + 150);
  lastButton.size(140, 40);
  image(img4,600,50,320,240);
  foo.speak("that's the song i dreamt!");
  lastButton.mousePressed(motivation);
}

function motivation() {
  lastButton.remove();
  foo.speak("damn it's lit");
  input = createInput("how should we call this hit?");
  input.position(50, 200);
  input.size(500, 30);
  image(img5,600,50,320,240);
  input.changed(granfinale);
}

function granfinale() {
  createCanvas(windowWidth, windowHeight);

  input.remove();
  fill("#345995");
  rect(0,0, windowWidth, windowHeight);

/*
  imageMode(CENTER);
  image(gato, windowWidth/2, windowHeight/2, gato.width/2, gato.height/2);
*/
  textAlign(CENTER);
  background('black')
  textSize(40);
  fill(255);
  text("CONGRATULATIONS YOU MADE A HIT WITH TRAVIS SCOTT", windowWidth/2, windowHeight/2 );
  heyButton = createButton("well done");
  button.position(windowWidth/2 - 80, windowHeight/2);
  button.size(160, 40);
  button.mousePressed(window.open("https://www.youtube.com/watch?v=cMYB_CVzX9U&has_verified=1"))

}
