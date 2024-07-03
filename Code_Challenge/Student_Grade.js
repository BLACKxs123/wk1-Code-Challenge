function calculateGrade() {
    // Prompt user to input student marks
    let marks = prompt("Enter student marks (between 0 and 100):");

    // Validate input
    marks = parseFloat(marks); // Convert input to a number

    // Check if input is a valid number and within range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Marks must be a number between 0 and 100.");
        return;
    }

    // Determine grade based on the given ranges
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    alert("Student's grade: " + grade);
}
