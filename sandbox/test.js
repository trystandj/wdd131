const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



let firstName = "antonia";
let lastName = "francesca";

function fullName(firstName, lastName) {
	return firstName + " " + lastName;
}
// or
// function fullName(first, last) {
// 	return `${first} ${last}`;   // string concatenation first + ' ' + last (not preferred)
//   }
// console.log(fullName(firstName, lastName));

// const fullName = function (firstName, lastName) {
// 	return firstName + " " + lastName;
// }

const fullName = (firstName, lastName) => ${firstName} ${lastName};

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

false
numbers.lastindex(2)

"fasl=se"