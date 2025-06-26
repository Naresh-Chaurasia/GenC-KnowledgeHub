function greetEnglish(name) {
    console.log("Hello, " + name + "!");
}
function greetFrench(name) {
    console.log("Bonjour, " + name + "!");
}
sayHello(greetEnglish, "Alice"); // Output: Hello, Alice!
sayHello(greetFrench, "Bob"); // Output: Bonjour, Bob!
