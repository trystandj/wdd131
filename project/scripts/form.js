function trackSubmissions(event) {
    event.preventDefault(); // 

    let count = localStorage.getItem("reviewCount") || 0;
    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count);

    window.location.href = "thanks.html"; }

function updateReviewCount() {
    let reviewCount = localStorage.getItem("reviewCount") || 0; 

    const reviewCountElement = document.getElementById("reviewCount");
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount; 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.querySelector(".form1"); 

    if (reviewForm) {
        reviewForm.addEventListener("submit", trackSubmissions); 
    }

    updateReviewCount();
});
