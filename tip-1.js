//demo:http://jsbin.com/qucoya/1/edit?html,console

function assign(a) {
	var b = a || {name: "defcon"};
	console.log(b.name);
}

assign({
	name: "js"
});

assign(null);

