const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
//hizi hapa juu ni images yenye utataka hiyo transition ifanyikie
let currentIndex = 0;

// Initial display
document.getElementById("imageDisplay").src = images[currentIndex];
//nimetumia if else instead of kutumia modulus%
function showNext() {
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      if (i < images.length - 1)/*- If we're not at the end (i < images.length - 1), go to the next image. else wrap to the first image (currentindex=0)alafu sasa for previous if we are not at the beggining(i>0),go back one.else,wrap to the last image(currentindex=images.length-1)*/
        {
        currentIndex = i + 1;
      } else {
        currentIndex = 0;
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
        currentIndex = images.length - 1;
      }
      break;
    }
  }
  document.getElementById("imageDisplay").src = images[currentIndex];
}