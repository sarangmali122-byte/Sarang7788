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