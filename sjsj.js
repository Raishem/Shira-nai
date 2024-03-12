document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the API
    fetch('https://universities.hipolabs.com/search?country=philippines')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('productContainer');
            data.products.forEach(product => {
                const productElement = document.createElement('div');
                
                productElement.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <hr>
                `;
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});