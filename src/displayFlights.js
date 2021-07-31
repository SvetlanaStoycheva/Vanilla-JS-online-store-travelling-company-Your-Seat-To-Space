import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (flights, DOMContainer, filters) => {
  // console.log(flights, DOMContainer);
  DOMContainer.innerHTML = flights
    .map((item) => {
      const { id, name, url, price } = item;
      return `
   <article class="product">
          <div class="product-container">
            <img src="${url}" class="product-img img" alt="${name}" />
            <div class="product-icons">
              <a href="flight.html" class="product-icon">
                <i class="fas fa-search"></i
              ></a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article>
    `;
    })
    .join('');
  DOMContainer.addEventListener('click', function (e) {
    const parent = e.target.parentElement;
    if (parent.classList.contains('product-cart-btn')) {
      addToCart(parent.dataset.id);
    }
  });
};

export default display;
