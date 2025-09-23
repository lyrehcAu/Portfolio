const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // tambah class scrolled kalo scrolllewat 50px -> triger ke css
    } else {
        header.classList.remove('scrolled'); // hapus class scrolled kalo balik atas lagi
    }
});

const learnMoreButton = document.querySelector('.learn-more-button');
let intervalId;

// sparkle generator
function createRandomSparkle() {
  const sparkle = document.createElement('span');
  sparkle.classList.add('sparkle');
  sparkle.innerHTML = '✨'; // sparklenya emot

  // spawn sparkle random
  const x = Math.random() * learnMoreButton.offsetWidth;
  const y = Math.random() * learnMoreButton.offsetHeight;
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';

  learnMoreButton.appendChild(sparkle);

  // sparkle dihapus setelah animasi done -> 2 detik
  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

// kalo button dihover -> spawn sparkle tiap 300ms
learnMoreButton.addEventListener('mouseenter', () => {
  intervalId = setInterval(createRandomSparkle, 300);
});

// kalau not hover lagi -> stop spawn
learnMoreButton.addEventListener('mouseleave', () => {
  clearInterval(intervalId);
});