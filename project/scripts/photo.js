const galleries = [
    {
        Name: "Top House View",
        imageUrl: "images/photo1.png",
    },
    {
        Name: "Fall",
        imageUrl:"images/photo2.png",    },
    {
        Name: "Forest Frame",
        imageUrl: "images/photo3.png",
    },
    {
        Name: "Fall and Winter",
        imageUrl: "images/IMG_0970.jpg",
    },
    {
        Name: "Fall and Winter prt2",
        imageUrl: "images/photo4.png",    },
    {
        Name: "Top Down",
        imageUrl: "images/dji_fly_20241020_160320_0112_1729456812755_photo.jpg",
    },
    {
        Name: "Typical Winter",
        imageUrl: "images/dji_fly_20250112_151938_0149_1736713312519_photo.jpg",
    },
    {
        Name: "Fall Top Down",
        imageUrl: "https://images.unsplash.com/photo-1542291771-64f962701184?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJvbmUlMjB2aWV3fGVufDB8fDB8fHww",
    }
];

displayArticles(galleries);

function displayArticles(filteredArticles) {
    const galleryContainer = document.querySelector('.gallary');
    galleryContainer.innerHTML = '';

    filteredArticles.forEach((article) => {
        let card = document.createElement('figure');
        card.classList.add('gallery-item'); 

        let name = document.createElement('figcaption');
        let image = document.createElement('img');

        name.textContent = article.Name;
        image.setAttribute('src', article.imageUrl);
        image.setAttribute('alt', article.Name);
        image.setAttribute('loading', 'lazy');

        card.append(image);
        card.append(name);
        galleryContainer.append(card);
    });
}
