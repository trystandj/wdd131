const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});





const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Belém Brazil Temple",
		location: "Belém, Pará, Brazil",
		dedicated: "2022, November, 20",
		area: 28675,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310.jpg"
	  },
	  {
		templeName: "Ogden Utah Temple",
		location: "Ogden, Utah, USA",
		dedicated: "1972, Janaury, 20",
		area: 112232,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-38445-main.jpg"
	  },
	  {
		templeName: "Curitiba Brazil Temple",
		location: "Curitiba Paraná, Brazil",
		dedicated: "2008, June, 1",
		area: 27850,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
	  },
  ];


  displayTempleCard(temples);

  const oldTemples = document.querySelector('#old-temples');
  oldTemples.addEventListener('click', () => {
	let oldTemp = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900);
	displayTempleCard(oldTemp);
  });

  const newTemples = document.querySelector('#new-temples');
  newTemples.addEventListener('click', () => {
	let newTemp = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000);
	displayTempleCard(newTemp);
  });

  	const largeTemples = document.querySelector('#large-temples');
  	largeTemples.addEventListener('click', () => {
	let largeTemp = temples.filter((temple) => temple.area > 90000);
	displayTempleCard(largeTemp);
  });

  	const smallTemples = document.querySelector('#small-temples');
  	smallTemples.addEventListener('click', () => {
	let smallTemp = temples.filter((temple) => temple.area < 100000);
	displayTempleCard(smallTemp);
  });

  const allTemples = document.querySelector('#home');
  allTemples.addEventListener('click', () => {
	displayTempleCard(temples);
  });

  function displayTempleCard(filteredTemples) {
	document.querySelector('.container').innerHTML = '';
	filteredTemples.forEach((temple) => {
		let card = document.createElement('figure');
		let name = document.createElement('figcaption');
		let location = document.createElement('p');
		let dedicated = document.createElement('p');
		let area = document.createElement('p');
		let image = document.createElement('img');

		name.textContent = temple.templeName;
		location.innerHTML = '<span class="label">Location:</span>' + temple.location;
		dedicated.innerHTML = '<span class="label">Dedicated:</span> ' + temple.dedicated;
		area.innerHTML = '<span class="label">Area:</span>' + temple.area + ' sq ft';
		image.setAttribute('src', temple.imageUrl);
		image.setAttribute('alt', '${temple.templeName}');
		image.setAttribute('loading', 'lazy');

		card.append(name);
		card.append(location);
		card.append(dedicated);
		card.append(area);
		card.append(image);

		document.querySelector('.container').append(card);
	});
  }

