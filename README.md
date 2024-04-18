# workshop-4

### Link to sketch: https://rbha917.github.io/workshop-4/ 

## Interactivity
- Generate images to screen using mouse interaction
function mousePressed() {
let r = random(imgs[array]);
image(r, mouseX, mouseY);
}

## Buttons
- under setup
	let button = createButton('your text')
	button.position(width/2, height/2);
	button.mousePressed(() => {
		let r = random(imgs[array]);
		image(r, width, height);	
	});

## Checkbox
- let checkbox;
- under setup
	checkbox = createCheckbox()
	checkbox.position(x, y);
- under draw
	if (checkbox.checked()){
		let r = random(imgs[array]);
		image(r, width, height);
	} else {
		background(255, 0, 0)
	}

## Sliders
- let slider;
- under setup
	slider = createSlider(min, max);
	slider.position(x, y);
	slider.size([length]);
- under draw
	let val = slider.value();
	background(val); //change bg based on value//
	img.loadPixels(); //increase red value from slider//
	for (let y = 0; y < height/2; y +){
		for (let x = 0; x < width; x ++){
			let index = (x + y * width) * 4;
			img.pixels[index] = val //red
			//img.pixels[index + 1] = 0 //green
			//img.pixels[index + 2] = random(255) //blue
			img.pixels[index + 3] = 255 //alpha
		}
	}
	img.updatePixels();
	image(img, 0, 0);

## Selections
- creates a drop-down menu
- under setup
	selection = createSelect();
	selection.position(x, y);
	selection.option('rose');
	selection.option('lily');
	selection.option('lotus');
- under draw
	let x = selection.selected();
	if (x === 'rose'){
		image(rose, x, y);
	} else if (x === 'lily'){
		image(lily, x, y);
	} else if (x === 'lotus'){
		image(lotus, x, y);
	}

## Inputs
- create box that allows user to give an input
- under setup
	input = createInput();
	input.position(x, y);	
- under draw, will display the answer on screen as it is typed
	let words = input.value();
	text(words, x, y);
### Using this in a context
	- create a submit button using above button tool
	submitButton.position(input.x + input.width, input.y); //will add button directly after input bar//
	submitButton.mousePressed(ask[function to store input])
	- add a title (still in setup)
	greeting = createElement('h2[html heading type]', 'your text');
	greeting.style('color', 'black[colour]');
	greeting.position(input.x, input.y - 50); //place above input bar//
- create function e.g.
	function ask() {
	question = input.value();
	input.value('') //blanks out input bar after msg//
	listQuestions.push(question); //add answer to array//
	if (listQuestions.length > 5){
		listQuestions.shift() //removes first item from the array and moves the rest up//
- under draw
	for (x = 0; x < listQuestions.length; x++){
		text(listQuestions[x], 20, 180 + x * 20);
	}
### Change canvas size to match window: createCanvas(windowWidth, windowHeight)
- match it to the height by user's adjustments
	function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	}

#### Chatgpt assistance for altering text
- textSize([num]) 
- textFont("Font name")
Available fonts -  Arial, Helevetica, Georgia, Times New Roman, Courier New, Verdana, Comic Sans MS

