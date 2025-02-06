const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

let chaptersArray = getChapterList() || [];

// Display stored chapters on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value !== '') {  // Ensure input is not empty
        displayList(input.value); // Display the new chapter
        chaptersArray.push(input.value);  // Add to the array
        setChapterList(); // Save to localStorage
        input.value = ''; // Clear input
        input.focus(); // Refocus input
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item); 
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function deleteChapter(chapter) {
    chapter = chapter.replace('❌', '').trim(); 
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
