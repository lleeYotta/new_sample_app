
window.onload = initDate3;//initDate2;//initTwo;




function initDate() {
	var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	
	var now = new Date();
	var dtString = dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate();

	document.getElementById("dtField").innerHTML = dtString;
}



function initDate1() {
	var now1 = new Date();

	if (now1.getDay() > 0 && now1.getDay() < 6) {
		var dtString1 = "Sorry, it's a weekday.";
	}
	else {
		var dtString1 = "Hooray, it's a weekend!";
	}
	
	document.getElementById("dtField1").innerHTML = dtString1;
}



function initDate2() {
	var now = new Date();
	document.getElementById("dtField2").innerHTML = timeString(now.getHours());

	function timeString(theHour) {
		if (theHour < 5) {
			return "What are you doing up so late?";
		}
		if (theHour < 9) {
			return "Good Morning!";
		}
		if (theHour < 17) {
			return "No surfing during working hours!";
		}
		return "Good Evening!";
	}
}




function initDate3() {
	var allTags = document.getElementsByTagName("*");
	
	for (var i=0;i<allTags.length; i++) {
		if (allTags[i].className.indexOf("tz")==0) {
			showTheTime(allTags[i],allTags[i].className.substring(2));
		}
	}
}

function showTheTime(currElem,tzOffset) {
	var dayName = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

	var thatTZ = new Date();
	var dateStr = thatTZ.toUTCString();

	dateStr = dateStr.substr(0,dateStr.length - 3);
	thatTZ.setTime(Date.parse(dateStr));
	thatTZ.setHours(thatTZ.getHours() + parseInt(tzOffset));
	
	currElem.innerHTML = showTheHours(thatTZ.getHours()) + showZeroFilled(thatTZ.getMinutes()) + showAmPm(thatTZ.getHours()) + dayName[thatTZ.getDay()];

	function showTheHours(theHour) {
		if (theHour == 0) {
			return 12;
		}
		if (theHour < 13) {
			return theHour;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue) {
		if (inValue > 9) {
			return ":" + inValue;
		}
		return ":0" + inValue;
	}
	
	function showAmPm(thatTime) {
		if (thatTime < 12) {
			return " AM ";
		}
		return " PM ";
	}
}
