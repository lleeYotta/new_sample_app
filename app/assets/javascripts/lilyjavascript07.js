window.onload = initAll;

function initAll() {
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
	//window.location = "jswelcome.html";
	window.location = " http://maintenance.yottaa.com/";//redirect rule needed from customer end
	return false;
}