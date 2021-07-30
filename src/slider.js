import { getElement } from './utils.js';
import { sliderImages } from './utils.js';

const slideContainer = getElement('.slide-container');

slideContainer.innerHTML = sliderImages
  .map((image, index) => {
    const { src } = image;
    let position = 'next';
    if (index === 0) {
      position = 'active';
    } else if (index === sliderImages.length - 1) {
      position = 'last';
    }
    return `
  <div class="slide-div ${position}">
    <img
        src="${src}"
        class="img slider-img"
        alt="slider-image"
    />
</div>
`;
  })
  .join('');

const startSlider = (type) => {
  const active = getElement('.active');
  const last = getElement('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = slideContainer.firstElementChild;
  }
  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;

    if (!next) {
      next = slideContainer.lastElementChild;
    }
    next.classList.remove('next');
    next.classList.add('last');
    return;
  }
  active.classList.add('last');
  last.classList.add('naxt');
  next.classList.add('active');
};

export { startSlider };
