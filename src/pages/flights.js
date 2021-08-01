// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store } from '../store.js';
import display from '../displayFlights.js';
import { getElement } from '../utils.js';

const flightsContainer = getElement('.products-container');

display(store, flightsContainer);
if (store) {
  getElement('.page-loading').style.display = 'none';
}
// filters
setupSearch(store);
setupCompanies(store);
setupPrice(store);
