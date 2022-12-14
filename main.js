canvas = document.getElementById('myCanvas');

 car2.png_width = 75;
 car2.png_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "greencar";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
	background_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.dreawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
ctx.dreawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y + 10;
console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}

function down()
{
	if(greencar_y <=500)
	{
		greencar_y = greencar_y - 10;
console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_y = greencar_x - 10;
console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}

function right()
{
	if(greencar_x <=700)
	{
		greencar_x = greencar_y + 10;
console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}
