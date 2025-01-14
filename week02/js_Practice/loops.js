// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato", "Apple"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//       {
//         place: "Rexburg, ID",
//         length: "5 years",
//       },
//       {
//         place: "Ammon, ID",
//         length: "3 years",
//       },
//       {
//         place: "Sandy, UT",
//         length: "1 year",
//       },
//     ],
//   };

// //   const foodsElement = document.querySelector('#favorite-foods');

// //   function createAndAppendFoodItem(food) {
// //     let favoriteFood = document.createElement('li');
// //     favoriteFood.textContent = food;
// //     foodsElement.appendChild(favoriteFood);
// //   }

// //   myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
  

// //   // with .map
// //   const foodsElement = document.querySelector('#favorite-foods');
// //   function mapFoodItem(food) {
// //     let favoriteFood = document.createElement('li');
// //     favoriteFood.textContent = food;
// //     return favoriteFood;
// //   }
// //   // this function could also be written this way using a template literal:
// //   function mapFoodItemSmall(food) {
// //     return `<li>${food}</li>`;
// //   }
// //   const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// //   // we need to flatten the array of strings into one big string. .join does this.
// //   foodsElement.innerHTML = foodListElements.join('');

// // or more simplified 

// // document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`).join("");
  
// //   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// //   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// //   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// //   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// //   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// const foodsElement = document.querySelector("#favorite-foods");
// const placesElement = document.querySelector("#places-lived");
// // requires a list, and a callback that will produce an html string for each item in the list
// // returns a string of html
// function generateListMarkup(list, templateCallback) {
//   const htmlList = list.map(templateCallback);
//   return htmlList.join("");
// }
// // requires an food string
// // returns that string embedded in HTML markup
// function foodsTemplate(food) {
//   return `<li>${food}</li>`;
// }

// // requires an place string
// // returns that string embedded in HTML markup
// function placesTemplate(place) {
//   return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
// }

// foodsElement.innerHTML = generateListMarkup(
//   myInfo.favoriteFoods,
//   foodsTemplate
// );
// placesElement.innerHTML = generateListMarkup(
//   myInfo.placesLived,
//   placesTemplate
// );



const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < DAYS; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach(function (item) {
    if (report < LIMIT) {
        console.log(report);
    }
});


for(let report of studentReport) {
    if (report < LIMIT) {
        console.log(report);
    }
}