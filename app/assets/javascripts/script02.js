window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.images.length; i++) {
		if (document.images[i].parentNode.tagName == "A") {
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(thisImage) {
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function() {
		this.src = this.outImage.src;
	}

	thisImage.overImage = new Image();

	//alert(thisImage.id)
	//not working well 404 error
	thisImage.overImage.src = "assets/"+thisImage.id+"_on.gif";
	thisImage.onmouseover = function() {
		this.src = this.overImage.src;
	}
}
