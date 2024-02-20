const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');

  })

})

document.querySelectorAll(".collapse__button").forEach(button => {
  button.addEventListener("click", () => {
    const collapseContent = button.nextElementSibling;
    button.classList.toggle("collapse__button--active");
    if (button.classList.contains("collapse__button--active")) {
      collapseContent.style.maxHeight = collapseContent.scrollHeight + "px";


    } else {
      collapseContent.style.maxHeight = 0;
    }

  });

});

var mybutton = document.getElementById("to__top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollBar(){
  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight-document.documentElement.clientHeight; //return viewable height
  var scrolled = (scroll/height)*100
  document.getElementById("indicator").style.width = scrolled + "%";
}
window.onscroll = function(){
  scrollBar();
}

let slideIndex = 0;
showSlides(); // Initialize the carousel

function moveSlide(n) {
    const slides = document.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
    slideIndex = (slideIndex + n + slides.length) % slides.length; // Calculate the next slide index, wrapping around if necessary
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
    const container = document.querySelector(".carousel-images");
    Array.from(slides).forEach(slide => slide.classList.remove("active")); // Remove active class from all images
    slides[slideIndex].classList.add("active"); // Add active class to the current image
    const offsetWidth = slideIndex * -100; // Calculate the offset to slide to the current image
    container.style.transform = `translateX(${offsetWidth}%)`; // Apply the transform to slide
}

