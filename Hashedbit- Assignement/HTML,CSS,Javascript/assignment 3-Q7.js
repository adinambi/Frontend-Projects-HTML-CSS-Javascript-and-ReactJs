// Original array of students
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

// Calculate averages using map and reduce
function calculateAverages(studentsArray) {
    return studentsArray.map(function(student) {
        // Calculate sum using reduce
        var sum = student.scores.reduce(function(acc, score) {
            return acc + score;
        }, 0);
        
        // Calculate average
        var average = sum / student.scores.length;
        
        // Return new object with name and average
        return {
            name: student.name,
            average: average
        };
    });
}

// Get the result
var result = calculateAverages(students);

// Display results
console.log("Original array:", students);
console.log("Transformed array:", result);