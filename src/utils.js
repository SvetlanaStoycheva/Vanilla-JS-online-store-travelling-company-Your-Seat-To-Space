// const apiInfo = 'http://localhost:3000';

const allFlightsUrl =
  'https://sweta-serverless-functions.netlify.app/api/2-basic-api';
// const allFlightsUrl = 'http://localhost:3000/flights';
const singleFlightUrl = 'http://localhost:3000/flights/';

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const sliderImages = [
  { src: './images/slider-1.jpg' },
  { src: './images/slider-2.jpg' },
  { src: './images/slider-3.jpg' },
  { src: './images/slider-4.jpg' },
  { src: './images/slider-5.jpg' },
  { src: './images/slider-6.jpg' },
];

export {
  allFlightsUrl,
  singleFlightUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
  sliderImages,
};
