//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
  return '<li>${step}</li>'; //the html string made from step
}
const stepsHtml = stemps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = steps.stepsHtml.join();// set the innerHTML


const grades = ["A", "B", "A"]

function convertGrade(grade) {
  let points = 0;

  if (grade === "A") {
    points = 4;
  } else if (grade === "b"){
    points = 3;
  }
  return points
}

const gpaPoints = grades.map(convertGrade)

const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});

const gpa = pointsTotal / gpaPoints.length;


// or
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;
// or
//  const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Step-by-Step Execution
// First Iteration (total = 3.5, item = 4.0)
// total + item = 3.5 + 4.0 = 7.5
// Second Iteration (total = 7.5, item = 3.8)
// total + item = 7.5 + 3.8 = 11.3
// Third Iteration (total = 11.3, item = 3.2)
// total + item = 11.3 + 3.2 = 14.5
// Final Result: 14.5 / 4 = 3.625


const computeWindChill = function(windSpeed, temperature) {
  // Fahrenheit Only
  return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
};

computeWindChill