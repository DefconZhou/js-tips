//demo http://jsbin.com/gidode/1/edit?html,console
function isType(type) {
  return function(obj) {
    return {}.toString.call(obj) == "[object " + type + "]";
  }
}

var isObject = isType("Object");
var isString = isType("String");
var isArray = Array.isArray || isType("Array");
var isFunction = isType("Function");

console.log(isObject({}));
console.log(isString("str"));
console.log(isArray([]));
console.log(isFunction(function() {}));
