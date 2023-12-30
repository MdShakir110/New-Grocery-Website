const search =document.getElementById("search-btn");
const searchform = document.querySelector(".search-form");
const cartBtn = document.getElementById("cart-btn");
const shoppingCart = document.querySelector(".shopping-cart");
const loginBtn = document.getElementById("login-btn");
const formEl = document.querySelector(".login-form");
const menuBar = document.getElementById("menu-btn");
const navBar = document.querySelector(".navbar");

search.addEventListener("click",()=>{
    searchform.classList.toggle("active");
    shoppingCart.classList.remove("active");
    formEl.classList.remove("active");
    navBar.classList.remove("active");
})
cartBtn.addEventListener("click",()=>{
    shoppingCart.classList.toggle("active");
    searchform.classList.remove("active");
    formEl.classList.remove("active");
    navBar.classList.remove("active");
})
loginBtn.addEventListener("click",()=>{
    formEl.classList.toggle("active");
    searchform.classList.remove("active");
    shoppingCart.classList.remove("active");
    navBar.classList.remove("active");
})
menuBar.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    formEl.classList.remove("active");
    searchform.classList.remove("active");
    shoppingCart.classList.remove("active");
})
window.addEventListener("scroll",()=>{
    navBar.classList.remove("active");
    formEl.classList.remove("active");
    searchform.classList.remove("active");
    shoppingCart.classList.remove("active");
})



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });