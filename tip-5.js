//if element's property of display is none
function inView(element) {
	return element.offsetParent === null;
}