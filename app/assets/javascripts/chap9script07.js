window.onload = initImages;

function initImages() {
	for (var i=0; i<document.images.length; i++) {
		document.images[i].ondblclick = newWindow;
	}
}

function newWindow() {
	var imgName = "assets/" + this.id + ".jpg"
	var imgWindow = window.open(imgName, "imgWin", "width=320,height=240,scrollbars=no");

	//setTimeout(function() { imgWindow.close()}, 3000); 


//setTimeout(newWindow, 3000);
}