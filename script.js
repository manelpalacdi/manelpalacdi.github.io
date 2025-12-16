const scroller = document.querySelector('.image-scroll');

scroller.addEventListener('wheel', (e) => {
  e.preventDefault();
  scroller.scrollLeft += e.deltaY;
});

