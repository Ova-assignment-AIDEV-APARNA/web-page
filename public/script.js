// Show alert when form is submitted
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent actual form submission

      const name = document.getElementById('name').value;
      alert(`Thank you, ${name}! Your message has been sent.`);

      form.reset(); // clear form fields
    });
  }

  // Card hover alert (optional)
  const cards = document.querySelectorAll('.custom-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      alert('You clicked on a card!');
    });
  });

  // Optional: Back to top button logic
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
