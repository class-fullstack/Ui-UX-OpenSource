// Open camera when button is clicked
const openCamera = () => {
  const loading = document.getElementById('loading');
  const popup = document.getElementById("camera-popup");
  
  loading.style.display = 'flex'; // Show loading spinner
  
  // Simulate delay for camera setup
  setTimeout(() => {
    popup.classList.add("show"); // Show camera popup with animation
    startCamera(); // Initialize camera
    loading.style.display = 'none'; // Hide loading spinner
  }, 1500); // 1.5 seconds delay for loading
};

// Close camera popup when "Close" button is clicked
const closeCamera = () => {
  const loading = document.getElementById('loading');
  const popup = document.getElementById("camera-popup");
  
  loading.style.display = 'flex'; // Show loading spinner
  
  // Simulate delay for stopping camera
  setTimeout(() => {
    stopCamera(); // Stop camera
    popup.classList.remove("show"); // Hide camera popup with animation
    loading.style.display = 'none'; // Hide loading spinner
  }, 1500); // 1.5 seconds delay for loading
};

// Initialize camera
const startCamera = () => {
  const videoElement = document.getElementById('videoElement');
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
    })
    .catch((error) => {
      console.error('Error accessing the camera', error);
    });
};

// Stop camera
const stopCamera = () => {
  const videoElement = document.getElementById('videoElement');
  const stream = videoElement.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach(track => track.stop());
  videoElement.srcObject = null;
};

// Start face recognition (Simulated face recognition logic)
const startFaceRecognition = () => {
  alert("Face recognition started!"); // In reality, replace with face recognition code
  closeCamera(); // Close camera after recognition
};
