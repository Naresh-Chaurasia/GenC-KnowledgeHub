// Sample array of objects
const users = [
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'David' }
];

// Using find to get the first user with id equal to 3
const foundUser = users.find(function(user){
  return user.id === 3;
});

console.log(foundUser); // Output: { id: 3, name: 'Charlie' }
