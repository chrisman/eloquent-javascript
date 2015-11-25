var deepEqual = function(x, y){

  if (!isAnObject(x) && !isAnObject(y)) return x === y

  if (numProps(x) !== numProps(y)) return false

  for (var i in x) {
    if (!(i in y)) return false;
    return deepEqual(x[i], y[i])
  }
  
  return
}

var isAnObject = function(obj){
  return (typeof obj == 'object' && obj != null)
}

var numProps = function(obj){
  var collector = 0
  for (var p in obj)
    collector++
  return collector
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(
  obj,
  obj));
// → true

console.log(deepEqual(
  obj,
  {here: 1, object: 2}));
// → false

console.log(deepEqual(
  obj,
  {here: {is: "an"}, object: 2}));
// → true

console.log(deepEqual(
  {key: "val", flap: "toop"},
  {doot: "val", key1: "val1"}));
// -> false
