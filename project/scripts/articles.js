const articles = [
    {
        Name: "About Me",
        Text: "Learn more about my personal journey",
        imageUrl: "images/dji_fly_20241020_160320_0112_1729456812755_photo.jpg"
    },
    {
        Name: "Where to Get Started",
        Text: "Learn more about how you can start your FPV journey",
        imageUrl: "images/dji_fly_20250112_151938_0149_1736713312519_photo.jpg"
    },
    {
        Name: "Guides",
        Text: "Learn how to take better shots",
        imageUrl: "https://images.unsplash.com/photo-1542291771-64f962701184?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJvbmUlMjB2aWV3fGVufDB8fDB8fHww"
    }
];

displayArticles(articles);

function displayArticles(filteredArticles) {
    document.querySelector('.articles').innerHTML = '';

    filteredArticles.forEach((article) => {
        let card = document.createElement('figure');
        let name = document.createElement('figcaption');
        let text = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = article.Name;
        text.innerHTML = `<span class="label"></span> ${article.Text}`;
        image.setAttribute('src', article.imageUrl);
        image.setAttribute('alt', `${article.Name}`);
        image.setAttribute('loading', 'lazy');


        card.append(image);
        card.append(name);
        card.append(text);

        document.querySelector('.articles').append(card);
    });
}
