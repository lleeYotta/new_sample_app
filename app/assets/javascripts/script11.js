/***


window.onload = choosePic;

var adImages = new Array("assets/reading1.gif","assets/reading2.gif","assets/reading3.gif");
var thisAd = 0;

function choosePic() {
	thisAd = Math.floor((Math.random() * adImages.length));
	document.getElementById("adBanner").src = adImages[thisAd];
	
	rotate();
}

function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 10 * 1000);
}
***/