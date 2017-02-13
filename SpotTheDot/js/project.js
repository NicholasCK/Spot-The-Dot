var start = new Date().getTime();

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function shapeAppear(){
	document.getElementById("circle").style.display = "block";
	start = new Date().getTime();
	var Topp = Math.random() * 400;
	var Leftt = Math.random() * 1000;
	var Widthh = Math.random() * 300;
	var Radius = Math.random() * 300;	
	document.getElementById("circle").style.backgroundColor = getRandomColor();
	document.getElementById("circle").style.borderRadius = Radius + "px";
	document.getElementById("circle").style.height = Widthh + "px";
	document.getElementById("circle").style.width = Widthh + "px";
	document.getElementById("circle").style.top = Topp + "px";
	document.getElementById("circle").style.left = Leftt + "px";
}

function appearAfterDelay(){
	setTimeout(shapeAppear , Math.random() * 2000);
}

appearAfterDelay();

document.getElementById("circle").onclick = function(){
	document.getElementById("circle").style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start) / 1000;
	document.getElementById("timeTaken").innerHTML = timeTaken + "s";
	appearAfterDelay();
}
