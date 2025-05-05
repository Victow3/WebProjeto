document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
      const body = accordion.querySelector('.accordion-body');
      const arrow = accordion.querySelector('.arrow');

      accordion.addEventListener('click', () => {
          body.classList.toggle('active');
          arrow.classList.toggle('rotated');
      });
  });
});
