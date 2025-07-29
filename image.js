const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
];

let currentIndex = 0;

// Initial display
document.getElementById("imageDisplay").src = images[currentIndex];

function showNext() {
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      if (i < images.length - 1) {
        currentIndex = i + 1;
      } else {
        currentIndex = 0; // Wrap to first image
      }
      break;
    }
  }
  document.getElementById("imageDisplay").src = images[currentIndex];
}

function showPrevious() {
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      if (i > 0) {
        currentIndex = i - 1;
      } else {
        currentIndex = images.length - 1; // Wrap to last image
      }
      break;
    }
  }
  document.getElementById("imageDisplay").src = images[currentIndex];
}
