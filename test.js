const list = document.getElementById("list");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

function updateScrollButtonsVisibility() {
  const containerWidth = list.parentNode.clientWidth;
  const listWidth = list.scrollWidth;

  if (containerWidth < listWidth) {
    scrollLeft.style.display = "flex";
    scrollRight.style.display = "flex";
  } else {
    scrollLeft.style.display = "none";
    scrollRight.style.display = "none";
  }
}

scrollLeft.addEventListener("click", () => {
 // Adjust scrolling speed as needed
  list.scrollLeft -= 200; 
});

scrollRight.addEventListener("click", () => {
// Adjust scrolling speed as needed
  list.scrollLeft += 200; 
});

window.addEventListener("resize", updateScrollButtonsVisibility);
// Initial check for visibility of scroll buttons on page load
updateScrollButtonsVisibility();
