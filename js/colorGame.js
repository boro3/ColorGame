var colors = [];
var colorNum;
var rndColor;
var mode = "HARD";
var pickedColor;
var modeBtn = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".squares");
var resetBtn = document.getElementById("reset");

reset();
selectMode();

function selectMode() {
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function () {
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.textContent === "Hard" ? mode = "HARD" : mode = "Easy";
			this.classList.add("selected");
			reset();
		})
	}
};

resetBtn.addEventListener("click", function () {
	reset();
});

function setSquaresHard() {
	colors = randomColors(6);
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function () {
			if (rndColor === this.style.backgroundColor) {
				changeColors(this.style.backgroundColor);
				document.querySelector("#message").textContent = "Correct!";
				document.querySelector("#reset").textContent = "Play Again?"
				document.querySelector("#header").style.backgroundColor = this.style.backgroundColor;
			} else {
				document.querySelector("#message").textContent = "Try Again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
};

function setSquaresEasy() {
	colors = randomColors(3);
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].addEventListener("click", function () {
				if (rndColor === this.style.backgroundColor) {
					changeColors(this.style.backgroundColor);
					document.querySelector("#message").textContent = "Correct!";
					document.querySelector("#reset").textContent = "Play Again?"
					document.querySelector("#header").style.backgroundColor = this.style.backgroundColor;
				} else {
					document.querySelector("#message").textContent = "Try Again!";
					this.style.backgroundColor = "#232323";
				}
			});
		} else {
			squares[i].style.display = "none";
		}
	}
};

function reset() {
	document.querySelector("#message").textContent = "";
	if (mode === "HARD") {
		setSquaresHard();
	} else {
		setSquaresEasy();
	}
	rndColor = pickColor();
	document.querySelector("#reset").textContent = "New Game";
	document.querySelector("#header").style.backgroundColor = "steelblue";
	document.querySelector("#colorDisplay").textContent = rndColor;
};

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function randomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
};

function randomColor() {
	//random red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//random green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//random blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
};