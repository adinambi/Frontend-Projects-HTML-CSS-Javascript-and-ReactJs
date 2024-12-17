var string = 'INDIA';
var letters = string.split('');
letters.splice(3, 0, 'O');
letters.splice(4, 0, 'N', 'E', 'S');
console.log(letters.join('')); // Output: 'INDONESIA'