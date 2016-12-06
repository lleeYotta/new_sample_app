
//alert(window.top.location)

//alert(window.self.location)


if (top.location != self.location) {
	top.location.replace(self.location);

	//self.location.replace(top.location);
}
