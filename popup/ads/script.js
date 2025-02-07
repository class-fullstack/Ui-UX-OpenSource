// Open Popup
document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('popupAd').style.display = 'flex';
  });
  
  // Close Popup
  document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('popupAd').style.display = 'none';
  });
  
  // Close Popup when clicking outside
  window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popupAd')) {
      document.getElementById('popupAd').style.display = 'none';
    }
  });