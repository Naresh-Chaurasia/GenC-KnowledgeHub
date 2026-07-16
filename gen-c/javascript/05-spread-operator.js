let numbers = [1, 2, 3];

let copy = [...numbers];

console.log(copy);
// Output: [1, 2, 3]

/////////////////////////////////////

let fruits = ["apple", "banana"];

let moreFruits = [...fruits, "orange"];

console.log(moreFruits);
// Output: ["apple", "banana", "orange"]

/////////////////////////////////////

let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log(merged);
// Output: [1, 2, 3, 4]


/////////////////////////////////////

let person = { name: "Naresh", age: 30 };

let updated = { ...person, city: "Mumbai" };

console.log(updated);
// Output: { name: "Naresh", age: 30, city: "Mumbai" }

/////////////////////////////////////


let todos = ["Task1", "Task2"];

let newTodo = "Task3";

let updatedTodos = [...todos, newTodo];

console.log(updatedTodos);
// Output: ["Task1", "Task2", "Task3"]

/////////////////////////////////////

const [todos, setTodos] = useState(["Task1", "Task2"]);

const addTodo = () => {
  const newTodo = "Task3";

  // Use spread operator to add new item
  setTodos([...todos, newTodo]);
};



