
function tripleValues(ary) {
  return ary.map(function(value) {
     return value * 3;
  });
}

x = tripleValues([1,2,3]);

console.log(x);