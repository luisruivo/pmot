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