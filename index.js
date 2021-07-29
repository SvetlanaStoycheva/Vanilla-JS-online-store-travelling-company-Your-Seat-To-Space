// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchFlights from './src/fetchFlights.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayFlights.js';
import { getElement } from './src/utils.js';

async function init() {
  const flights = await fetchFlights();
  if (flights) {
    setupStore(flights);
    console.log(store);
    const featured = store.filter((item) => item.featured === true);
    display(featured, getElement('.featured-center'));
  }
}

window.addEventListener('DOMContentLoaded', init);
