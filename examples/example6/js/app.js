// Css animation example 1
let txtStatInput = document.getElementById("txtStatInput");

function textFocus() {
	resetAnimation(txtStatInput);
	txtStatInput.classList.remove("deselected");
	txtStatInput.classList.add("selected");
}

function textLeave() {
	resetAnimation(txtStatInput);
	txtStatInput.classList.remove("selected");
	txtStatInput.classList.add("deselected");
}

function resetAnimation(el) {
	el.style.animation = "none";
	el.offsetHeight;
	el.style.animation = null;
}

// Greensock animation 1
let exampleDiv = document.getElementById("txtCool");
TweenMax.to(exampleDiv, { duration: 2, x: 100, y: 100 });

// Greensock animation 2
let navItems = document.getElementsByClassName("navitem");

for (let i = 0; i < navItems.length; i++) {
	TweenLite.from(navItems[i], {
		duration: i * 0.4,
		x: -100,
		alpha: 0,
		delay: i * 0.4,
	});
}
