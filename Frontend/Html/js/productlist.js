console.log("index js loaded");

async function fetchCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    return data;
}

async function popularCategories() {
    const categories = await fetchCategories();
    const categoryList = document.getElementById("categoryList");
    categories.forEach(category => {
        const categoryHolder = document.createElement("div");
        const categoryLink = document.createElement("a");
        categoryLink.href = "#";
        categoryLink.textContent = category;// setting the category name as the text of the anchor tag
        categoryHolder.classList.add("category-item", "d-flex", "align-items-center","justify-content-center");
        categoryHolder.appendChild(categoryLink);
        categoryLink.appendChild(categoryHolder);
    });
}

popularCategories();
