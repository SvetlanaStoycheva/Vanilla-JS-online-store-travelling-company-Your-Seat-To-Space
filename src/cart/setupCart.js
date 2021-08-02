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
  let item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    let currentFlight = findProduct(id);
    currentFlight = { ...currentFlight, amount: 1 };
    cart = [...cart, currentFlight];
    addToCartDOM(currentFlight);
    // console.log(cart);
  } else {
    const amount = changeAmount(id, 'increase');
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];

    const changedAmount = items.find(
      (value) => Number(value.dataset.id) === id
    );
    changedAmount.textContent = amount;
  }
  // update the number on the shopping cart icon
  displayCartItemCount();
  // cart totals
  displayCartTotal();
  // set cart in locale storage
  setStorageItem('cart', cart);

  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((acc, curr) => {
    acc += curr.amount;
    return acc;
  }, 0);
  getElement('.cart-item-count').textContent = amount;
}
function displayCartTotal() {
  const total = cart.reduce((acc, curr) => {
    const totalPrice = curr.amount * curr.price;
    acc += totalPrice;
    return acc;
  }, 0);
  getElement('.cart-total').textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach((item) => {
    addToCartDOM(item);
  });
}

// function increaseAmount(id) {
//   let newAmount;
//   cart = cart.map((cartItem) => {
//     if (cartItem.id === id) {
//       newAmount = cartItem.amount + 1;
//       cartItem = { ...cartItem, amount: newAmount };
//     }
//     return cartItem;
//   });
//   return newAmount;
// }
// function decreaseAmount(id) {
//   let newAmount;
//   cart = cart.map((cartItem) => {
//     if (cartItem.id === id) {
//       newAmount = cartItem.amount - 1;
//       cartItem = { ...cartItem, amount: newAmount };
//     }
//     return cartItem;
//   });
//   return newAmount;
// }

function changeAmount(id, type) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      if (type === 'increase') {
        newAmount = cartItem.amount + 1;
      } else if (type === 'decrease') {
        newAmount = cartItem.amount - 1;
      }
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
}

function setupCartFunctionality() {
  cartItemsDOM.addEventListener('click', function (e) {
    const parent = e.target.parentElement;
    const id = Number(e.target.dataset.id);
    const parentId = Number(e.target.parentElement.dataset.id);
    // console.log(e.target);

    if (e.target.classList.contains('cart-item-remove-btn')) {
      removeItem(id);
      parent.parentElement.remove();
    }
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = changeAmount(parentId, 'increase');
      parent.nextElementSibling.textContent = newAmount;
    }
    if (parent.classList.contains('cart-item-decrease-btn')) {
      const newAmount = changeAmount(parentId, 'decrease');
      parent.previousElementSibling.textContent = newAmount;
      if (newAmount < 1) {
        removeItem(parentId);
        parent.parentElement.parentElement.remove();
      }
    }

    //in all three cases of remove, increase or decrease we will run the following functions
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
  });
}

// in order to update cart when we switch from page to page, we will run init function
// every time when we refresh the page or switch from page to page
const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
};
init();
