// hanuman.js
// Loads Hanuman Chalisa text from assets/hanuman_chalisa.txt and displays it in the page

fetch('assets/hanuman_chalisa.txt')
  .then(response => response.text())
  .then(text => {
    document.querySelector('.mantra-text').textContent = text;
  })
  .catch(() => {
    document.querySelector('.mantra-text').textContent = 'Unable to load Hanuman Chalisa.';
  });
