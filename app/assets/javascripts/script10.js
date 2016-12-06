window.onload = choosePic;

function choosePic() {
	var myPix = new Array("assets/lion.jpg","assets/tiger.jpg","assets/bear.jpg");
	var randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}
