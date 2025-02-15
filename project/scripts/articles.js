const articles = [

    {
        Name: "Where to Get Started",
        Text: "Learn more about how you can start your FPV journey",
        imageUrl: "images/dji_fly_20250112_151938_0149_1736713312519_photo.webp",
        location: "https://consumertestedreviews.org/product/best-camera-drones/?AdGroupId=1326013379964604&AdId=82876062840100&BidMatchType=bp&CampaignId=519158175&msclkid=2e39b5a167ac19af983bd20c341d935d&QueryString=best%20fpv%20drones&keyword=drones%20with%20cameras&MatchType=p&Network=o&cpid=e457f969-540b-402a-8001-bb50125b166b&lpid=15680098-1744-4281-8cbb-431a56037d23&tooltip=tooltip&utm_source=bing&utm_medium=cpc&utm_campaign=Drone%20%2F%20BING%20%2F%20USA%20%2F%20Broad%20%2F%20ECPC%20%2F%2095%20(Generic)&utm_term=drones%20with%20cameras&utm_content=Phrase#no3"
    },
    {
        Name: "Guides",
        Text: "Learn how to take better shots",
        imageUrl: "https://images.unsplash.com/photo-1542291771-64f962701184?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJvbmUlMjB2aWV3fGVufDB8fDB8fHww",
        location: "guide.html"
    },
    {
        Name: "About Me",
        Text: "Learn more about my personal journey",
        imageUrl: "images/dji_fly_20241020_160320_0112_1729456812755_photo.webp",
        location: "aboutme.html"
    }

];

displayArticles(articles);

function displayArticles(filteredArticles) {
    document.querySelector('.articles').innerHTML = '';

    filteredArticles.forEach((article) => {
        let link = document.createElement('a');
        let card = document.createElement('figure');
        let name = document.createElement('figcaption');
        let text = document.createElement('p');
        let image = document.createElement('img');
        

        
        text.innerHTML = `<span class="label"></span> ${article.Text}`;
        image.setAttribute('src', article.imageUrl);
        image.setAttribute('alt', `${article.Name}`);
        image.setAttribute('loading', 'lazy');

      
        link.setAttribute('href', article.location);
        link.setAttribute('target', '_blank');
        link.textContent = article.Name;
        
        link.style.color = 'black';

        

        name.append(link);

     
        card.append(image);
        card.append(name);
        card.append(text);

     
        document.querySelector('.articles').append(card);
    });
}
