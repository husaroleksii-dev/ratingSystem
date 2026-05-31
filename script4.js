const stars = Array.from(document.querySelectorAll('.star'));

if (stars.length > 0) {
  let currentRating = 0;

  stars.forEach((star) => {
    star.addEventListener('click', () => {
      const value = Number(star.dataset.value) || 0;
      currentRating = (value === currentRating) ? 0 : value; // toggle clear only when clicking the same star
      stars.forEach(s => s.classList.toggle('active', Number(s.dataset.value) <= currentRating));
    });
  });
} else {
  const outlineOfStar = document.getElementById('outlineOfStar');
  if (outlineOfStar) {
    outlineOfStar.addEventListener('click', () => {
      outlineOfStar.classList.toggle('active');
    });
  }
}