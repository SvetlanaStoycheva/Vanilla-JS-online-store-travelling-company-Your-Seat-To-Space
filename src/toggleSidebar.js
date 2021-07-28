import { getElement } from './utils.js';

const navBtn = getElement('.toggle-nav');
const closeBtn = getElement('.sidebar-close');
const sidebar = getElement('.sidebar-overlay');

navBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
