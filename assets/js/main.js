let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function(){
    mobileMenu.classList.toggle("hidden");
});

// Open modal section

let loginBtn = document.querySelector("#login-btn");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector("#close-modal");

loginBtn.addEventListener("click", function(){
    modal.style.display = "block";
});

closeModal.addEventListener("click", function(){
    modal.style.display = "none";
})

// ARROW UP

let arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", function(){
    window.scroll({top:0, behavior:"smooth"});
})

// Swiper slide JS

var swiper = new Swiper(".testimonial-slider", {
  
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 2,
      },

      1200: {
          slidesPerView: 3,
      },
  },

});