// velmaaral.js
// Loads Vel Maaral text from assets/VelMaaral.txt and displays it in the page

fetch('assets/velmaaral.txt')
  .then(response => response.text())
  .then(text => {
    document.querySelector('.velmaaral-text').textContent = text;
  })
  .catch(() => {
    document.querySelector('.velmaaral-text').textContent = 'Unable to load Vel Maaral.';
  });
