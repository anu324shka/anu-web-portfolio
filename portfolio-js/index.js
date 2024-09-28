// Anushka Sharma - anu324shka
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

const typingText = document.getElementById("typing-text");
const textArray = ["Learn Coding", "Build Projects", "Master Web Development"];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  currentText = textArray[textIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
  }

  setTimeout(type, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message. We will get back to you soon!');
  this.reset(); // Reset form fields
});


const nameElement = document.getElementById('name-typing');
const nameText = "Anushka Sharma";
let index = 0;
const getStartedBtn = document.querySelector('.hero-btn'); // Select the button

function typeEffect() {
  if (index < nameText.length) {
    nameElement.innerHTML += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    // Once the name is fully typed, show the button
    getStartedBtn.style.display = 'inline-block';
  }
}

window.onload = typeEffect;