// Get the cart button and the course slides
const cartBtn = document.getElementById('cart');
const courseSlides = document.querySelectorAll('.swiper-slide');

// Add a click event listener to the cart button
cartBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default action of the link

    // Get the current slide
    const currentSlide = document.querySelector('.swiper-slide-active');

    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Get the details of the current course
    const courseImg = currentSlide.querySelector('img').src;
    const courseTitle = currentSlide.querySelector('h3').textContent;
    const coursePrice = currentSlide.querySelector('.price-btn').textContent;

    // Create the cart item structure
    cartItem.innerHTML = `
        <img src="${courseImg}" alt="${courseTitle}">
        <h3>${courseTitle}</h3>
        <p>${coursePrice}</p>
        <button class="remove-btn">Remove</button>
    `;

    // Add a click event listener to the remove button
    cartItem.querySelector('.remove-btn').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default action of the button
        cartItem.remove(); // Remove the cart item from the cart
    });

    // Append the cart item to the cart.html document
    const cart = document.querySelector('.cart');
    cart.appendChild(cartItem);
});