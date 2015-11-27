var arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
]

console.log(arrays.reduce(function(first, rest){
  return first.concat(rest)
}));

// -> [1, 2, 3, 4, 5, 6]
