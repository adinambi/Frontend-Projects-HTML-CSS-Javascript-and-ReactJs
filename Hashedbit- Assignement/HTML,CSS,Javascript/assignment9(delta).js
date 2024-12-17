// 1. Variable Scopes
function variableScopes() {
    var varVariable = "This is var";
    let letVariable = "This is let";
    const constVariable = "This is const";
  
    if (true) {
      var varVariable = "Var can be redeclared";
      let letVariable = "New block-scoped let";
      const constVariable = "New block-scoped const";
      console.log("Inside block:");
      console.log(varVariable);
      console.log(letVariable);
      console.log(constVariable);
    }
  
    console.log("Outside block:");
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }
  
  // 2. Return the Second Fruit
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  function getSecondFruit(arr) {
    return arr[1];
  }
  
  // 3. Add and Remove Element in Array
  function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
  }
  
  // 4. Square Numbers Using map()
  const numbers = [1, 2, 3, 4, 5];
  function squareNumbers(arr) {
    return arr.map(num => num * num);
  }
  
  // 5. Filter Odd Numbers
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  // 6. Greeting Using Object Properties
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer"
  };
  function greetPerson(obj) {
    return `Hello, my name is ${obj.name}. I am ${obj.age} years old and work as a ${obj.occupation}.`;
  }
  
  // 7. Calculate Area of Rectangle
  function calculateRectangleArea(rect) {
    return rect.width * rect.height;
  }
  
  // 8. Return Object Keys
  function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  
  // 9. Merge Two Objects
  function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // 10. Calculate Sum Using reduce()
  function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Call Functions and Display Outputs
  console.log("1. Variable Scopes:");
  variableScopes();
  
  console.log("\n2. Second Fruit:");
  console.log(getSecondFruit(fruits));
  
  console.log("\n3. Modify Array:");
  console.log(modifyArray([1, 2, 3]));
  
  console.log("\n4. Square Numbers:");
  console.log(squareNumbers(numbers));
  
  console.log("\n5. Filter Odd Numbers:");
  console.log(filterOddNumbers(numbers));
  
  console.log("\n6. Greeting:");
  console.log(greetPerson(person));
  
  console.log("\n7. Rectangle Area:");
  console.log(calculateRectangleArea({ width: 10, height: 5 }));
  
  console.log("\n8. Object Keys:");
  console.log(getObjectKeys(person));
  
  console.log("\n9. Merged Objects:");
  console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
  
  console.log("\n10. Sum of Numbers:");
  console.log(calculateSum(numbers));
  