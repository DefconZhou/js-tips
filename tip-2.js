
//demo http://jsbin.com/joquso/4/edit?html,console
function assign(a) {
	var b = a && a.name;
	console.log(b);	
}

assign(null);
assign({name: "defcon"});