IMG_WIDTH = 2048;
IMG_HEIGHT = 1367;
IMG_RATIO = IMG_HEIGHT / IMG_WIDTH;
NAVBAR_HEIGHT = 50;

$(document).ready(function() {
	updateSize();
	$(window).resize(function() {
		updateSize();
	});
});

function updateSize() {
	SCREEN_WIDTH = window.innerWidth;
	SCREEN_HEIGHT = window.innerHeight - NAVBAR_HEIGHT;
	SCREEN_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;

	updateOrientation();
	updateOffset();
}

function updateOrientation() {
	if (IMG_RATIO > SCREEN_RATIO) {
		$(".group").css("width", "100%");
		$(".group").css("height", "auto");
	} else {
		$(".group").css("height", "50%");
		$(".group").css("width", "auto");
	}
}

function updateOffset() {
	DISPLAY_IMG_WIDTH = (IMG_RATIO * SCREEN_WIDTH) / SCREEN_RATIO;
	diff = DISPLAY_IMG_WIDTH - SCREEN_WIDTH;

	diff < 0 ? (offset = diff) : (offset = 0);	
	$(".group").css("left", (offset+"px"));	
}
