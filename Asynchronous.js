console.log("Task 1");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("Task 2");

// Output:
// Task 1
// Task 2
// Async Task
