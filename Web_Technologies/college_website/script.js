const text = document.querySelector('.header6');

function animateText() {
  text.classList.remove('active');
  setTimeout(() => {
    text.classList.add('active');
  }, 5000);
}

animateText();
setInterval(animateText, 5000);

var containerWrapper = document.getElementById("containerWrapper");
var scrollAmount = 300; // Adjust the scroll amount as needed

function scrollContainer(direction) {
    var currentScroll = containerWrapper.scrollLeft;
    containerWrapper.scrollTo({
        left: currentScroll + direction * scrollAmount,
        behavior: "smooth"
    });
}