window.onload = showCookies;

//get cookies good code to use by Lily

function showCookies() {
	var outMsg = "";

	if (document.cookie == "") {
		outMsg = "There are no cookies here";
	}
	else {
		var thisCookie = document.cookie.split("; ");
	
		for (var i=0; i<thisCookie.length; i++) {


			if(thisCookie[i].split("=")[0]=="userName")
			{
			outMsg += "Cookie name is '" + thisCookie[i].split("=")[0];
			outMsg += "', and the value is '" + thisCookie[i].split("=")[1] + "'<br />";
			}
		}
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}
