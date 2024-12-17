function calculateStudentAveragesClassic(students) {
    var results = [];
    
    // Traditional for loop
    for (var i = 0; i < students.length; i++) {
        // Current student object
        var student = students[i];
        
        // Get student name and subjects
        var studentName = Object.keys(student)[0];
        var subjects = student[studentName];
        
        // Calculate sum using traditional method
        var total = 0;
        var count = 0;
        
        for (var subject in subjects) {
            total += subjects[subject];
            count++;
        }
        
        // Calculate average
        var average = Math.floor(total / count);
        
        // Construct result object
        var result = {};
        result[studentName] = { average: average };
        
        results.push(result);
    }
    
    return results;
}