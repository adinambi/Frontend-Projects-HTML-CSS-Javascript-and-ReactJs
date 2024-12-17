// Function to replace wrong word with correct word
function correctFn(string, wrong, correct) {
    var correctedString = string.replace(wrong, correct);
    return correctedString;
}

// Example usage
var sentence = "My nme is Aditya Nambiar";
var wrongWord = "nme";
var correctWord = "name";

var result = correctFn(sentence, wrongWord, correctWord);

console.log("Original sentence:", sentence);
console.log("Corrected sentence:", result);