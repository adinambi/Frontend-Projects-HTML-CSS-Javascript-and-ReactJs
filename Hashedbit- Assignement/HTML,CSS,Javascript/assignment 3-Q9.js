function countWords(paragraph) {
    // Check if paragraph is null or undefined
    if (!paragraph) return 0;
    
    // Trim whitespace from start and end
    // Replace multiple spaces with a single space
    // Split by space and filter out empty strings
    return paragraph
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .filter(word => word.length > 0)
        .length;
}

// Example usage
console.log(countWords("Hello world")); 
console.log(countWords(" My Name is Aditya Nambiar. I am a CSE student. I study at Pillai college")); 
console.log(countWords("")); 
console.log(countWords("One,two.three!")); 