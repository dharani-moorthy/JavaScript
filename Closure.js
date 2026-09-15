function outer() {
  let count = 0; // variable in outer scope

  function inner() {
    count++;
    return count;
  }

  return inner;
}

let counter = outer(); 

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
