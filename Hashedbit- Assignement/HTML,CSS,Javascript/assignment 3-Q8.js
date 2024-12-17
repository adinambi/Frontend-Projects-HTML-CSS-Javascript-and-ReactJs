function digitalRoot(num) {
    // Convert number to string to handle large numbers
    let sum = num.toString();
    
    // Continue until we have a single-digit number
    while (sum.length > 1) {
        // Sum the digits
        sum = sum.split('').reduce((acc, digit) => acc + parseInt(digit), 0).toString();
    }
    
    // Return the final single-digit number
    return parseInt(sum);
}

// Example usage
console.log(digitalRoot(456));  // Output: 6
console.log(digitalRoot(65536));  // Output: 7