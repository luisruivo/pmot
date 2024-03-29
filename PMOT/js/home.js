// TOGGLE-BUTTON BEGINNING
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const contactButton = document.getElementsByClassName('contact-button')[0]
const socialMediaButtons = document.getElementsByClassName('social-media-buttons')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    contactButton.classList.toggle('active')
    socialMediaButtons.classList.toggle('active')
})

const hamburger = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', function () {
    this.classList.toggle('is-active');
});
// TOGGLE-BUTTON END


// SLIDESHOW BEGINNING
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 6000);

    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

function plusSlides(n){
clearInterval(myTimer);
if (n < 0){
    showSlides(slideIndex -= 1);
} else {
showSlides(slideIndex += 1); 
}


if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 6000);
} else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 6000);
}
}

function currentSlide(n){
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(n + 1)}, 6000);
showSlides(slideIndex = n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

pause = () => {
clearInterval(myTimer);
}

resume = () =>{
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(slideIndex)}, 6000);
}
// SLIDESHOW END

