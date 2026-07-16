let todos = ["Task1", "Task2"];

function addTodo() {
    const newTodo = "Task3";
    // Use spread operator to create a new array
    todos = [...todos, newTodo];
    console.log(todos);
}

addTodo();


let todos = ["Task1", "Task2"];

// Our own setTodos function (similar to React)
function setTodos(newTodos) {
todos = newTodos;
}

function addTodo() {
    const newTodo = "Task3";
    // Use spread operator and call our setTodos function
    setTodos([...todos, newTodo]);
    console.log(todos);
}

addTodo();