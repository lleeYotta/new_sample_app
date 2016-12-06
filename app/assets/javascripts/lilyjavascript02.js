//document.write("Hello, lily s world using javascript file!");

window.onload = writeMessage;

function writeMessage() {
	alert('here')
	document.getElementById("helloMessage").innerHTML = "injecting into helloMessage!";
}


