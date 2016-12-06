window.onresize = resizeFix;

if (document.layers) {
	alert(origWidth)
	var origWidth = window.innerWidth;
	var origHeight = window.innerHeight;
}

function resizeFix() {
	if (document.layers) {
		if (window.innerWidth != origWidth || window.innerHeight != origHeight) {
			alert("reloading")
			window.location.reload();
		}
	}
}
