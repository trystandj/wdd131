const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');
// });


document.addEventListener("DOMContentLoaded", function () {
	if (localStorage.getItem("navbarOpen") === "true") {
		navigation.classList.add("open");
		hamButton.classList.add("open");
	}
});

hamButton.addEventListener("click", () => {
	const isOpen = navigation.classList.toggle("open");
	hamButton.classList.toggle("open");

	localStorage.setItem("navbarOpen", isOpen.toString());
})



const links = document.querySelectorAll('.navigation a');

links.forEach(link => {
    // Check if we're on the local development environment
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        // For local development, use relative paths
        const localPath = link.getAttribute('href').replace('https://trystandj.github.io/wdd131', '');
        link.setAttribute('href', localPath);
    } else {
        // For production (GitHub Pages), use the full URL
        const fullUrl = `https://trystandj.github.io${link.getAttribute('href').replace('/project', '')}`;
        link.setAttribute('href', fullUrl);
    }
});
