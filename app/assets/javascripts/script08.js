window.onload = initBannerLink;

var thisAd = 0;

function initBannerLink() {
	if (document.getElementById("adBanner").parentNode.tagName == "A") {
		document.getElementById("adBanner").parentNode.onclick = newLocation;
	}
	
	rotate();
}

function newLocation() {
	var adURL = new Array("negrino.com","sun.com","microsoft.com");
	document.location.href = "http://www." + adURL[thisAd];
	return false;
}

function rotate() {
	var adImages = new Array("assets/banner1.gif","assets/banner2.gif","assets/banner3.gif");

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 10 * 1000);
}