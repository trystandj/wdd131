const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function populateList() {
    const productSelect = document.getElementById("productSelect")
    if (!productSelect) return;
    

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (⭐ ${product.averagerating})`;
        productSelect.appendChild(option);
    });
  }

  function trackSubmissions(event) {
    event.preventDefault();

    let count = localStorage.getItem("reviewCount") || 0;

    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count)

    window.location.href = "review.html";

    
  }

  document.addEventListener("DOMContentLoaded", function () {
    populateList();
    const reviewForm = document.querySelector(".form");
    if (reviewForm) {
        reviewForm.addEventListener("submit", trackSubmissions);
    }
});

function updateReviewCount() {
    let reviewCount = localStorage.getItem("reviewCount");

    const reviewCountElement = document.getElementById("reviewCount");
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
}

document.addEventListener("DOMContentLoaded", updateReviewCount);