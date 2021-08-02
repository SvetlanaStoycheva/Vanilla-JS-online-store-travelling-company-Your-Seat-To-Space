import { getElement } from '../utils.js';
import display from '../displayFlights.js';

const setupCompanies = (store) => {
  let buttons = store.map((item) => item.company);
  buttons = ['all', ...new Set(buttons)];

  getElement('.companies').innerHTML = buttons
    .map((item) => {
      return `
        <button class="company-btn">${item}</button>
        `;
    })
    .join('');

  getElement('.companies').addEventListener('click', function (e) {
    // console.log(e.target.textContent);
    if (e.target.textContent === 'all') {
      display(store, getElement('.products-container'), true);
    } else {
      const newStore = store.filter(
        (item) => item.company === e.target.textContent
      );
      display(newStore, getElement('.products-container'), true);
    }
  });
};

export default setupCompanies;
