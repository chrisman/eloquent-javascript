
var ancestry = require('./ancestry')
ancestry = JSON.parse(ancestry)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.
function groupBy(a, f){
  var collector = {}
  a.forEach(function(member){
    var groupName = f(member)
    if (groupName in collector)
      collector[groupName].push(member)
    else
      collector[groupName] = [member]
  })
  return collector
}

function ageAtDeath(p) {
  return p.died - p.born
}

for (person of ancestry)
  person.century = Math.ceil(person.died / 100)

var agesByCentury = groupBy(ancestry, function(p){
  return p.century
})

for (century in agesByCentury) {
  var ages = agesByCentury[century].map(ageAtDeath)
  console.log(century + ': ' + average(ages))
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
