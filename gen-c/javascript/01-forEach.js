
var posts = ['a','b','c'];

console.log('----for loop----');
for (var i = 0; i < posts.length; i++) {
  console.log(posts[i]);
}


console.log('----Iterator----');
posts.forEach(function(post){
    console.log(post)
});

var numbers = [10,20,30];

