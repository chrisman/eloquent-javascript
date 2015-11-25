var reverseArray = function(a){
  var collector = []

  while (a.length)
    collector.push(a.pop())

  return collector
}
var reverseArrayInPlace = function(a){
  var tmp
  for (var i = 0; i < Math.floor(a.length/2); i++) {
    tmp = a[i]
    a[i] = a[a.length - 1 - i]
    a[a.length - 1 - i] = tmp
  }
  return a
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
