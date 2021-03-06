// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { allFlightsUrl, getElement, formatPrice } from '../utils.js';
import fetchFlights from '../fetchFlights.js';
import { store } from '../store.js';

const url = document.URL;
const id = Number(url.substring(url.lastIndexOf('?') + 1)[3]);

const singleFlight = store.find((item) => item.id === id);

// const init = async () => {
//   const singleFlight = await fetchFlights(`${allFlightsUrl}/${id}`);

//   if (singleFlight) {
//     getElement('.page-loading').style.display = 'none';
//   }
//   displaySingleFlight(singleFlight);
//   getElement('.addToCartBtn').addEventListener('click', function () {
//     addToCart(id);
//   });
// };
const init = () => {
  getElement('.page-loading').style.display = 'none';
  displaySingleFlight(singleFlight);
  getElement('.addToCartBtn').addEventListener('click', function () {
    addToCart(id);
  });
};

window.addEventListener('DOMContentLoaded', init);

function displaySingleFlight(mission) {
  // const { id, fields } = mission;
  const { company, desc, expirianceLevel, name, price, url } = mission;
  // const { url } = fields.image[0];

  getElement('.single-product').innerHTML = `
  <div class="section-center single-product-center">
        <img
          src="${url}"
          class="single-product-img img"
          alt="${name}"
        />
        <article class="single-product-info">
          <div>
            <h2 class="single-product-title">${name}</h2>
            <p class="single-product-company text-slanted">${company}</p>
            <p class="single-product-price">${formatPrice(price)}</p>
            <p class="single-product-price single-product-experience">level of experience: </p>
            ${expirianceLevel
              .map((item) => {
                return `<div class="product-color" style="background-color: ${item}"></div>`;
              })
              .join('')}
            <div class="single-product-colors"></div>
            <p class="single-product-desc">${desc}</p>
            <button class="addToCartBtn btn" data-id=${id}>add to cart</button>
          </div>
        </article>
      </div>
  `;
  getElement('.page-hero-title').textContent = `Home / ${name}`;
  document.title = name;
}
