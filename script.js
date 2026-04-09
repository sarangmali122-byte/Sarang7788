const toggle = document.getElementById("darkToggle");

toggle.onclick = function(){
document.body.classList.toggle("light-mode");
};

/* FULLSCREEN IMAGE VIEWER */

const images = document.querySelectorAll(".clickable");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeBtn");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeBtn.onclick = function(){

lightbox.style.display="none";

};

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY;
const offset=sec.offsetTop-300;

if(top>offset){
sec.classList.add("show");
}

});

});

/* SCROLL REVEAL ANIMATION */

ScrollReveal({

distance: '60px',
duration: 1200,
delay: 200,
reset: false

});

ScrollReveal().reveal('.home',{origin:'top'});

ScrollReveal().reveal('#about',{origin:'left'});

ScrollReveal().reveal('#certificates',{origin:'bottom'});

ScrollReveal().reveal('#projects',{origin:'right'});

ScrollReveal().reveal('#gallery',{origin:'bottom'});

ScrollReveal().reveal('#contact',{origin:'top'});

/* TYPING ANIMATION */

var typed = new Typed("#typing", {
strings: [
"Sarang Sunil Mali",
"B.Tech CSE Student",
"Future Software Engineer"
],
typeSpeed: 60,
backSpeed: 40,
loop: true
});
