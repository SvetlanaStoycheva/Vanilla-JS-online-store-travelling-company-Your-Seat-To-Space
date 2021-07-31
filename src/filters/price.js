import { getElement, formatPrice } from '../utils.js';
import display from '../displayFlights.js';

const setupPrice = (store) => {
  const price = store.map((item) => item.price).sort((a, b) => a - b);
  const min = price[0];
  const max = price[price.length - 1];
  getElement('.price-filter').min = min;
  getElement('.price-filter').max = max;
  getElement('.price-filter').value = max;
  getElement('.price-value').textContent = formatPrice(max);

  getElement('.price-form').addEventListener('input', function (e) {
    // console.log(e.target.value);
    const value = Number(e.target.value);
    getElement('.price-value').textContent = formatPrice(value);

    const newStore = store.filter((item) => item.price <= value);
    display(newStore, getElement('.products-container'), true);
  });
};

export default setupPrice;
