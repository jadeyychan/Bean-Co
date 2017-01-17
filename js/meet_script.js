IMG_WIDTH = 2048;
IMG_HEIGHT = 1367;
IMG_RATIO = IMG_HEIGHT / IMG_WIDTH;

$(document).ready(function() {

	updateSize();
	$(window).resize(function() {
		updateSize();
	});

});

function updateSize() {
	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	var SCREEN_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;

	if (IMG_RATIO > SCREEN_RATIO) {
		$(".group").css("width", "100%");
		$(".group").css("height", "auto");

	} else {
		$(".group").css("height", "100%");
		$(".group").css("width", "auto");
	}
}