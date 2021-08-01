// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  id = Number(id);
  let currentFlight = findProduct(id);
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    currentFlight = { ...currentFlight, amount: 1 };
    cart = [...cart, currentFlight];
    addToCartDOM(currentFlight);
    // console.log(cart);
  } else {
  }

  openCart();
};

const init = () => {};
init();
