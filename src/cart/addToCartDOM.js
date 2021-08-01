import { formatPrice, getElement, singleFlightUrl } from '../utils.js';

const addToCartDOM = ({ id, name, price, url, amount }) => {
  const article = document.createElement('article');
  article.classList.add('cart-item');
  article.setAttribute('data-id', id);

  const cartItemsContainer = getElement('.cart-items');

  article.innerHTML = `
     <img src="${url}" class="cart-item-img" alt="${name}" />
              <div>
                <h4 class="cart-item-name">${name}</h4>
                <p class="cart-item-price">${formatPrice(price)}</p>
                <button class="cart-item-remove-btn" data-id="${id}">remove</button>
              </div>
              <div>
                <button class="cart-item-increase-btn" data-id="${id}">
                  <i class="fas fa-chevron-up"></i>
                </button>
                <p class="cart-item-amount" data-id="${id}">${amount}</p>
                <button class="cart-item-increase-btn" data-id="${id}">
                  <i class="fas fa-chevron-down"></i>
                </button>
             </div>
`;
  cartItemsContainer.appendChild(article);
};

export default addToCartDOM;
