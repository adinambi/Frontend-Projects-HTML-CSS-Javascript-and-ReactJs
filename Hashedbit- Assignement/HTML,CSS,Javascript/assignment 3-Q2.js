var str = "I love my India";
function reverseWordsOrder(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseWordsOrder(str));  // Output: "India my love I"