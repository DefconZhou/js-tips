// @Author defconzhou
// @History 2016-06-26
// @Ref https://fiddle.jshell.net/defcon/2ohxg4hk/
var counts = [1, 2, 3, 4];
Array.prototype.min = function() {
  var self = this;
  var len = self.length;
  if (len == 0) throw new Error("Array is empty");
  else if (len == 1) return self[0];
  if (len > 1) {
    var min = self[0];
    for (var i = 1; i < len; i++) {
      if (self[i] < min) {
        min = self[i];
      }
    }
    return min;
  }
}
console.log(counts.min());
for (var item in counts) {
  if (counts.hasOwnProperty(item)) {
    console.log(item);
  }
}


function Person(name) {
  this.name = name;
}

Person.prototype = {
  print: function() {
    console.log(this.name);
  }
};

var p = new Person("defcon");
console.log(Person.prototype.constructor == Object);
Person.prototype.constructor = Person;