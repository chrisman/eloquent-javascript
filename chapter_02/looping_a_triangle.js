/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function triangle(n) {
  var str = '#';
  for (var i = 1; i <= n; i++) {
    console.log(str);
    str += '#';
  }
}

triangle(7);
