window.onload = rotate;

var thisAd = 0;

function rotate() {
	var adImages = new Array("assets/reading1.gif","assets/reading2.gif","assets/reading3.gif");

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 10 * 1000);
}
