// OPEN BURGER MENU
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

// CLOSE BURGER MENU
const navLink = document.querySelectorAll(".nav_link");

function closeMenu() {
  hamburger.classList.remove("active");
  navList.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));


// On Scroll functions

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "2px 2px";
    document.getElementById("navbar").style.backgroundColor = "rgb(0, 48, 73)";
    document.getElementById("navbar").style.marginTop = "0px";
    document.getElementById("logo").style.fontSize = "55px";
  } else {
    document.getElementById("navbar").style.padding = "8px 8px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.marginTop = "35px";
    document.getElementById("logo").style.fontSize = "80px";
  }
}


//SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


// Menu toggle 

const targetMorning = document.getElementById("morning");
const targetNoon = document.getElementById("noon");
const targetNight = document.getElementById("night");
const targetMenuMessage = document.getElementById("menu-message");


const btnMorning = document.getElementById("morning-btn");
const btnNoon = document.getElementById("noon-btn");
const btnNight = document.getElementById("night-btn");



btnMorning.onclick = function() {
  if (targetMorning.style.display !== "none") {
    targetMorning.style.display = "none";
  } else {
    targetMorning.style.display = "block";
    targetNoon.style.display = "none";
    targetNight.style.display = "none";
    targetMenuMessage.style.display = "none";
  }
};

btnNoon.onclick = function() {
  if (targetNoon.style.display !== "none") {
    targetNoon.style.display = "none";
  } else {
    targetNoon.style.display = "block";
    targetMorning.style.display = "none";
    targetNight.style.display = "none";
    targetMenuMessage.style.display = "none";
  }
};

btnNight.onclick = function() {
  if (targetNight.style.display !== "none") {
    targetNight.style.display = "none";
  } else {
    targetNight.style.display = "block";
    targetMorning.style.display = "none";
    targetNoon.style.display = "none";
    targetMenuMessage.style.display = "none";
  }
};

