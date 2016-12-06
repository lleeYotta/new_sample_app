window.onload = showCookies;



//alert(document.cookie);


//get cookies good code to use by Lily

function showCookies() {
	var outMsg = "";

	if (document.cookie == "") {
		outMsg = "There are no cookies here";
	}
	else {
		var thisCookie = document.cookie.split("; ");

		//alert('thisCookie' + thisCookie);
	
		for (var i=0; i<thisCookie.length; i++) {


			//if(thisCookie[i].split("=")[0]=="userName")
			//{
			outMsg += "Cookie name is '" + thisCookie[i].split("=")[0];
			outMsg += "', and the value is '" + thisCookie[i].split("=")[1] + "'<br />";
			//}
		}
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}


window.onload = cookieDelete;


function cookieDelete() {
	var cookieCt = 0;
	

	if (document.cookie != "" && confirm("Do you want to delete the cookies?")) {
		var thisCookie = document.cookie.split("; ");
		cookieCt = thisCookie.length;
		
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate()-1);
						   
		for (var i=0; i<cookieCt; i++) {
			var cookieName = thisCookie[i].split("=")[0];
			document.cookie = cookieName + "=;expires=" + expireDate.toGMTString();
		}
	}
	document.getElementById("cookieData").innerHTML = "Number of cookies deleted: " + cookieCt;
}
