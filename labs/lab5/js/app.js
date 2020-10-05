/* animation for header */
let headerBlock = document.getElementById("header");
TweenMax.fromTo(headerBlock, 3, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });

let headerSpacerBlock = document.getElementById("headerSpacer");
TweenMax.fromTo(headerSpacerBlock, 3, { opacity: 0 }, { opacity: 1 });

/* animation for content block*/
let contentBlock = document.getElementById("contentBlock");
TweenMax.fromTo(contentBlock, 1, { opacity: 0, x: -100 }, { opacity: 1, x: 0 });

let contentItems = document.getElementsByClassName("content");
for (i = 0; i < contentItems.length; i++) {
	contentItems[i].addEventListener("mouseover", mouseOver(i));
	contentItems[i].addEventListener("mouseout", mouseOut(i));
	TweenLite.from(contentItems[i], {
		duration: i * 0.8,
		x: -100,
		alpha: 0,
		delay: i * 0.4,
	});
}

var e;
function mouseOver(e) {
	TweenMax.to(contentItems[e], 0.5, { scaleX: 1.5, scaleY: 1.5 });
}

function mouseOut(e) {
	TweenMax.to(contentItems[e], 0.5, { scaleX: 1, scaleY: 1 });
}
