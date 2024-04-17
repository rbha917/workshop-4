let imgs = []
let lily, lotus, hibiscus, rose, tulip;
let slider;
let input;
let list = []
let checkbox;

function preload() {
  lily = loadImage('images/lily.jpg');
  lotus = loadImage('images/lotus.jpg');
  hibiscus = loadImage('images/hibiscus.jpg');
  rose = loadImage('images/rose.jpg');
  tulip = loadImage('images/tulip.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imgs.push(lily);
  imgs.push(lotus);
  imgs.push(hibiscus);
  imgs.push(rose);
  imgs.push(tulip);

  // let button = createButton('BLOOM')
  // button.position(CENTER);
	// button.position(400, 400);
	// button.mousePressed(() => {
	// 	// let r = random(imgs);
	// 	// image(r, 0, 0);	
  // let x = random(rose.width);
	// let y = random(rose.height);
	// let c = rose.get(int(x), int(y));
	// fill(c);
	// noStroke();
	// rect(x, y, 20, 20);
	// });

  input = createInput();
	input.position(5, 270);
  greeting = createElement('h2', 'What is your favourite flower?');
	greeting.style('color', 'black');
	greeting.position(input.x, input.y - 50);

  let enter = createButton('ENTER')
	enter.position(input.x + input.width, input.y);
	enter.mousePressed(ask);

  // slider = createSlider(0, 255);
	// slider.position(200, 500);
	// slider.size(500);

  selection = createSelect();
	selection.position(0, 0);
	selection.option('rose');
	selection.option('lily');
	selection.option('lotus');

  checkbox = createCheckbox()
	checkbox.position(5, 220);
  greeting = createElement('h3', 'Tick this box');
	greeting.style('color', 'black');
	greeting.position(checkbox.x, checkbox.y - 40);

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	}

function ask() {
	answer = input.value();
	input.value('') 
	list.push(answer);
	if (list.length > 5){
		list.shift();
  }
}

function draw() {
  // let val = slider.value()
  // background(val)

  if (checkbox.checked()){
		// background(250, 0, 255);
    let d = random(rose.width);
	  let y = random(rose.height);
	  let c = rose.get(int(d), int(y));
	  fill(c);
	  noStroke();
	  rect(d, y, 20, 20);
	} else {
		background(255)
	}

  let z = selection.selected();
	if (z === 'rose'){
		image(rose, 0, 0, 300, 200);
	} else if (z === 'lily'){
		image(lily, 0, 0, 300, 200);
	} else if (z === 'lotus'){
		image(lotus, 0, 0, 300, 200);
	}

  let x = 0
  for (x = 0; x < list.length; x++){
    textSize(24)
    textFont("Georgia")
		text(list[x], 10, 320 + x * 20);
	}

}




