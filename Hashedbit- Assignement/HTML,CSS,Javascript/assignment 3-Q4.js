var str = "Welcome to JavaScript Programming World!";
var vowels = 0;
var consonants = 0;

str.toLowerCase().split('').forEach(function(char) {
    if(char >= 'a' && char <= 'z') {
        if(['a', 'e', 'i', 'o', 'u'].includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
});

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);