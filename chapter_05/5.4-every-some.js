// Your code here.
function every(a, b){
  for (var i = 0; i < a.length; i++){
    if (!b(a[i])) return false
  }
  return true
}
function some(a, b){
  /* forEach doesn't work?? */
  // a.forEach(function(v, i, a){
  //   if(b(v)) return true
  // })
  // return false
  for (var i = 0; i < a.length; i++){
    if (b(a[i])) return true
  }
  return false
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
