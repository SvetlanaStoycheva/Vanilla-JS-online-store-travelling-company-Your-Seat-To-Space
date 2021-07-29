import { getStorageItem, setStorageItem } from './utils.js';

//once we fetch the flights we setupStore. setupStore gets invoked only in index.js
//when the localeStorage is empty getStorageItem returns [] and we setStorageItem with the fetched data. After that, for example in Flights, we take the data from the locale storage.

// let store = getStorageItem('store');
let store = [];
const setupStore = (flights) => {
  flights.map((item) => {
    // console.log(item);
    const id = item.id;
    const {
      company,
      expirianceLevel,
      featured,
      price,
      name,
      image,
    } = item.fields;
    const { url } = item.fields.image[0];
    store.push({ id, company, expirianceLevel, featured, price, name, url });
  });
  setStorageItem('store', store);
};
const findProduct = () => {};
export { store, setupStore, findProduct };
