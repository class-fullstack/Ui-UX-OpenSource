// Popup Control
const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.querySelector('.close-btn');
const popup = document.getElementById('popupAd');

function openPopup() {
  popup.style.display = 'flex';
  popup.classList.remove('closing');
  setTimeout(() => {
    popup.style.opacity = '1';
    document.body.classList.add('popup-open');
    startCountdown();
    createParticles();
  }, 10);
}

function closePopup() {
  popup.classList.add('closing');
  popup.style.opacity = '0';
  
  setTimeout(() => {
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
    stopCountdown();
    // Cleanup particles if needed
  }, 300); // Match this duration with CSS transition
}

// Event Listeners
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

// Close when clicking outside
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.style.display === 'flex') {
    closePopup();
  }
});