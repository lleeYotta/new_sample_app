window.onload = initWindows;

function initWindows() {
	if (document.getElementById("childField")) {
		document.getElementById("childField").onchange = updateParent;
	}
	else {
		newWindow = window.open("assets/child.html","newWin","status=yes,width=300,height=300");
	}
}

function updateParent() {
	window.opener.document.getElementById("msgLine").value = "Hello " + this.value + "!";
}
