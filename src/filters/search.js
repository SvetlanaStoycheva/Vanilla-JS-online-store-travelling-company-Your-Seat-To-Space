import { getElement } from '../utils.js';
import display from '../displayFlights.js';

const setupSearch = (store) => {
  getElement('.input-form').addEventListener('input', function (e) {
    e.preventDefault();
    let value = e.target.value;

    value = value.toLowerCase();
    const newStore = store.filter((item) => {
      let { name } = item;
      name = name.toLowerCase();
      return name.startsWith(value);
    });
    display(newStore, getElement('.products-container'), true);

    if (newStore.length < 1) {
      getElement('.products-container').innerHTML = `
      <h3 class="filter-error">
        sorry, no products matched your search
        </h3>
      `;
    }
  });
};

export default setupSearch;
