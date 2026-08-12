const images = document.querySelectorAll('.stack > img');

let topIndex = images.length - 1;
images[topIndex].classList.add('top');
 
images.forEach((img, i) => {
  img.addEventListener('click', () => {
    if (i !== topIndex) return;
 
    img.classList.add('faded');
    img.classList.remove('top');
 
    topIndex -= 1;
    if (topIndex >= 0) {
      images[topIndex].classList.add('top');
    }
  });
});