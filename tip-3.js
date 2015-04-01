//demo http://jsbin.com/fewezi/3/edit?html,console
function assign(a) {
	var b;
	a && a.obj && a.obj.name ? b = a.obj.name : b = "defcon";
	console.log(b);
}

assign({
	obj:{
		name: "js"
	}
});

assign(null);