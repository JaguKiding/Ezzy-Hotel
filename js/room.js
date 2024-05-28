//Navbar Sticky
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//Navbar Hide
var lastScrollTop = 0;
navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//Slider Image Restaurant
var swiper = new Swiper(".swiper", {
  slidesPerView: 3, //foto yg muncul
  // spaceBetween: 40, //jarak antar foto
  navigation: {
    //navigasi <>
    nextEl: ".right",
    prevEl: ".left",
  },
  //   pagination: {
  //     el: ".fa",
  //     clickable: true, //bisa di klik
  //     type: "bullets",
  //     // dynamic: true,
  //   },
  autoplay: {
    delay: 2000, // Set the autoplay delay
  },
  loop: true, //looping yes
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});

// Click Hamburger Menu
document.querySelector(".toggle-menu").addEventListener("click", function () {
  document.querySelector(".navbar .ul").style.top = "75px";
});

document.querySelector(".toggle-menu").addEventListener("click", function () {
  document.querySelector(".toggle-menu").style.display = "none";
});

document.querySelector(".toggle-menu").addEventListener("click", function () {
  document.querySelector(".close-menu").style.display = "block";
});

document.querySelector(".close-menu").addEventListener("click", function () {
  document.querySelector(".close-menu").style.display = "none";
});

document.querySelector(".close-menu").addEventListener("click", function () {
  document.querySelector(".toggle-menu").style.display = "flex";
});

document.querySelector(".close-menu").addEventListener("click", function () {
  document.querySelector(".navbar .ul").style.top = "-250px";
});

feather.replace();
