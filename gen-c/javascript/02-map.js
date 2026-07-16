var numbers = [1,2,3];
var x2 = [];

numbers.forEach(function(number){
    x2.push(number*2);
  }
);

console.log('----using forEach----')
console.log(x2)

console.log('----using map----')
var doubled = numbers.map(function(number){
  return number * 2;
}
);

console.log(doubled)
