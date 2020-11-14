// 1. Declare a variable named submissions that is initialized to an array with the following objects

const submissions = [
  {
    name: "Peter Parker",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Cassandra Cain",
    score: 99,
    date: "2020-05-14",
    passed: true,
  },

  {
    name: "Arthur Curry",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },

  {
    name: "Billy Batson",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

console.log("Original submissions", submissions);

// 2. Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore, newDate) {
  let newPassed;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  });
}

addSubmission(submissions, "Bruce Banner", 45, "2020-11-12");
console.log("Add submission", submissions);

// 3. Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array , index
// ○ Functionality: remove the object from the array at the specified index using the splice method.

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 0);
console.log("Delete submission", submissions);

// 4. Declare a function named deleteSubmissionByName
// ○ Parameter(s): array , name
// ○ Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

function deleteSubmssionByName(array, name) {
  let index = array.findIndex((array) => array.name === name);
  array.splice(index, 1);
}

deleteSubmssionByName(submissions, "Bruce Banner");
console.log("Delete by Name", submissions);

// 5. Declare a function named editSubmission
// ○ Parameter(s): array , index , score
// ○ Functionality: update an object’s score in the array at the specified index . Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

function editSubmission(array, index, score) {
  let passed;
  if (score >= 60) {
    passed = true;
  } else {
    passed = false;
  }
  array[index].score = score;
  array[index].passed = passed;
}

editSubmission(submissions, 1, 20);
console.log("Edit submission", submissions);

// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array , name
// ○ Functionality: return the object in the array that has the provided name . Use the find method.

function findSubmssionByName(array, name) {
  const studentName = array.find((student) => student.name === name);
  console.log("Find by Name", studentName);
  return studentName;
}

findSubmssionByName(submissions, "Arthur Curry");

// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

function findLowestScore(array) {
  let lowestScore = array[0].score;
  array.forEach(function (student) {
    if (student.score < lowestScore) {
      lowestScore = student.score;
    }
  });
  console.log("Lowest score", lowestScore);
}

findLowestScore(submissions);

// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

function findAverageScore(array) {
  let totalScore = 0;
  for (const student of array) {
    totalScore += student.score;
  }
  let averageScore = totalScore / array.length;
  console.log("Average score:", averageScore);
  return averageScore;
}

findAverageScore(submissions);

// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

function filterPassing(array) {
  const passingStudents = array.filter((array) => array.passed === true);
  console.log("Passing students:", passingStudents);
}

filterPassing(submissions);

// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove(array) {
  const scoreAbove90 = array.filter((array) => array.score >= 90);
  console.log("Score above 90:", scoreAbove90);
}

filter90AndAbove(submissions);