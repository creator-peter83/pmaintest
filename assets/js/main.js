(function () {
  const cards = document.querySelectorAll('.category-card, .product-card');
  cards.forEach((card) => {
    card.addEventListener('focusin', () => card.classList.add('is-focused'));
    card.addEventListener('focusout', () => card.classList.remove('is-focused'));
  });
})();
