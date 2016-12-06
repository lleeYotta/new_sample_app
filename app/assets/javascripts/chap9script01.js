
/***
addOnload(initOne);
addOnload(initTwo);
addOnload(initThree);

function addOnload(newFunction) {
	var oldOnload = window.onload;
	
	//if (typeof oldOnload == "function") {
		//alert("here")
		//window.onload = function() {
			//if (oldOnload) {
				//oldOnload();
			//}
			//newFunction();
		//}
	//}
	//else {
		//window.onload = newFunction;
	//} 
}

function initOne() {
	//alert("1")
	document.getElementById("pageBody").style.backgroundColor = "#0000FF";
}

function initTwo() {
	//alert("2")
	document.getElementById("pageBody").style.color = "#FF0000";
}

function initThree() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].nodeName == "H1") {
			//alert("3");
			allTags[i].style.border = "5px green solid";
			allTags[i].style.padding = "25px";
			allTags[i].style.backgroundColor = "#FFFFFF";
		}
	}
}
***/