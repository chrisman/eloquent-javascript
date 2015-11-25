var arrayToList = function(a){
  var list = prepend(a.pop(), null)
  while (a.length)
    list = prepend(a.pop(), list)
  return list
}

var listToArray = function(l){
  var array = []
  while(l) {
    array.push(l.value)
    l = l.rest
  }
  return array
}

// takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element
var nth = function(l, n){
  if (n === 0) return l.value
  return nth(l.rest, n-1)
}

// takes an element and a list and creates a new list that adds the element to the front of the input list
var prepend = function(v, l){
  return {
    value: v,
    rest: l
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
