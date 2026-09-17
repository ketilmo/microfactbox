/*! MicroFactBox v1.0.0 | (c) 2026 Alexander Prestmo | MIT License | git+https://github.com/aprestmo/microfactbox.git */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  assistanceLevel();

  function assistanceLevel() {
    const noneInput = document.querySelector('#none');
    const someInput = document.querySelector('#some');

    if (!noneInput || !someInput) return;

    if (noneInput.checked) {
      document.body.setAttribute('class', '');
      document.body.classList.add('show-none');      
    } else if (someInput.checked) {
      document.body.setAttribute('class', '');
      document.body.classList.add('show-some');
    } else {
      document.body.setAttribute('class', '');
      document.body.classList.add('show-all');
    }

    mfbs = document.querySelectorAll('.mfb');
    mfbs.forEach(mfb => {
      mfb.setAttribute('aria-expanded', false);
      mfb.classList.add('is-hidden');
    });
  }
  
  document.addEventListener('input', assistanceLevel);
  
  document.addEventListener('click', function (event) {
    if (event.target.matches('mark')) {
      event.target.parentElement.nextElementSibling.classList.toggle('is-hidden');
      
      if (event.target.parentElement.nextElementSibling.classList.contains('is-hidden')) {
        event.target.parentElement.nextElementSibling.setAttribute('aria-expanded', false);
      } else {
        event.target.parentElement.nextElementSibling.setAttribute('aria-expanded', true);
      }
    }
  });
});
