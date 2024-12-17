// Original array
var inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

// Using filter to get numbers greater than 5
function filterGreaterThanFive(arr) {
    var result = arr.filter(function(number) {
        return number > 5;
    });
    return result;
}

//  filtered array
var answer = filterGreaterThanFive(inputArr);

// Display results
console.log("Original array:", inputArr);
console.log("Numbers greater than 5:", answer);