const images = [
    "mike.jpeg",
    "teenage.jpeg",
    "Angie.jpeg"
  ];
  
  let currentIndex = 0;
  
  // Initial display
  document.getElementById("imageDisplay").src = images[currentIndex];
  
  // Manual navigation
  function showNext() {
    for (let i = 0; i < images.length; i++) {
      if (i === currentIndex) {
        currentIndex = (i < images.length - 1) ? i + 1 : 0;
        break;
      }
    }/* Line-by-Line Breakdown
1️ for (let i = 0; i < images.length; i++) {
- This is a loop that goes through each index of the images array.
- i starts at 0 and increases until it reaches the last index (images.length - 1).
2️ if (i === currentIndex) {
- This checks: “Is this the image we’re currently showing?”
- If yes, we’re ready to move to the next one.
3️ currentIndex = (i < images.length - 1) ? i + 1 : 0;
- This is a ternary operator — a shorthand for if...else.
- It means:
- If i is not the last image, go to the next one (i + 1)
- If i is the last image, wrap around to the first (0)
4️ break;
- This stops the loop once we’ve found and updated the current image index.
- No need to keep looping after that.
5 document.getElementById("imageDisplay").src = images[currentIndex];
- This updates the image on the page by setting the src attribute to the new image path.


*/
    document.getElementById("imageDisplay").src = images[currentIndex];
  }
  
  function showPrevious() {
    for (let i = 0; i < images.length; i++) {
      if (i === currentIndex) {
        currentIndex = (i > 0) ? i - 1 : images.length - 1;
        break;
      }
    }
    document.getElementById("imageDisplay").src = images[currentIndex];
  }/* Line-by-Line Breakdown
1️ for (let i = 0; i < images.length; i++) {
- Loops through each index of the images array.
2️ if (i === currentIndex) {
- Checks if the current loop index i matches the image currently being shown.
3️ currentIndex = (i > 0) ? i - 1 : images.length - 1;
- This is a ternary operator that decides:
- If i is greater than 0, go back one image (i - 1)
- If i is 0 (first image), wrap around to the last image (images.length - 1)
4️ break;
- Stops the loop once the new index is set.
5️ document.getElementById("imageDisplay").src = images[currentIndex];
- Updates the image on the page to the new one.

  
  // Automatic slideshow
  /*this is to run another function repeatedly at a set time interval takes the arguement,a function to run(shownext) and the time in milliseconds between each run(4000 ms=4seconds*/
  /*()=>{shownext();} this is an arrow funtion a shorter way to write a function in javascript,calling the shownext()function which updates the image to the next one*/
  setInterval(() => {
    showNext();
  }, 4000); // Change image every 4 seconds