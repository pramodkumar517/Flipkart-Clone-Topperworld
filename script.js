// DOM Elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCountElement = document.getElementById('cart-count');
const searchInput = document.getElementById('search');
const priceFilter = document.getElementById('price-filter');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

// Cart Array
let cartItems = [];

// Add to Cart Event
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Add to Cart Function
function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.querySelector('h3').innerText;
    const productPrice = product.querySelector('p').innerText;

    const cartItem = { name: productName, price: productPrice };
    cartItems.push(cartItem);
    updateCart();
}

// Update Cart Display
function updateCart() {
    cartItemsContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    cartCountElement.innerText = cartItems.length;
}

// Search Functionality
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        product.style.display = productName.includes(searchText) ? 'block' : 'none';
    });
});

// Price Filter Functionality
priceFilter.addEventListener('change', function() {
    const selectedFilter = priceFilter.value;
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productPrice = parseInt(product.getAttribute('data-price'));
        
        if (selectedFilter === 'low' && productPrice >= 20) {
            product.style.display = 'none';
        } else if (selectedFilter === 'high' && productPrice < 20) {
            product.style.display = 'none';
        } else {
            product.style.display = 'block';
        }
    });
});

//
