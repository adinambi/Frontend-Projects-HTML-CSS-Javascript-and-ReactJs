// Method 1: Using array methods
function reverseString1(str) {
    return str.split('').reverse().join('');
}

// Method 2: Using a for loop
function reverseString2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using reduce
function reverseString3(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// Method 4: Recursive approach
function reverseString4(str) {
    // Base case
    if (str === '') return '';
    
    // Recursive case
    return reverseString4(str.substr(1)) + str.charAt(0);
}

// Example usage
console.log(reverseString1("Hello")); // Output: olleH
console.log(reverseString2("Hello")); // Output: olleH
console.log(reverseString3("Hello")); // Output: olleH
console.log(reverseString4("Hello")); // Output: olleH