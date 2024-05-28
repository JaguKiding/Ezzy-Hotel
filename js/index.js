var swiper = new Swiper(".swiper", {
  slidesPerView: 1, //foto yg muncul
  // spaceBetween: 40, //jarak antar foto
  navigation: {
    //navigasi <>
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true, //bisa di klik
  //     type: "bullets",
  //     // dynamic: true,
  //   },
  autoplay: {
    delay: 2200, // Set the autoplay delay
  },
  loop: true, //looping yes
});

//Navbar Sticky
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Program Slider
var swiper = new Swiper(".swiper-program", {
  slidesPerView: 4, //foto yg muncul
  // spaceBetween: 40, //jarak antar foto
  navigation: {
    //navigasi <>
    nextEl: ".right",
    prevEl: ".left",
  },
  pagination: {
    el: ".fa",
    clickable: true, //bisa di klik
    type: "bullets",
    // dynamic: true,
  },
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
      slidesPerView: 4,
    },
  },
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

//Click Like 1
document.querySelector(".empty1").addEventListener("click", function () {
  document.querySelector(".fill1").style.display = "flex";
});

document.querySelector(".empty1").addEventListener("click", function () {
  document.querySelector(".empty1").style.display = "none";
});

document.querySelector(".fill1").addEventListener("click", function () {
  document.querySelector(".empty1").style.display = "flex";
});

document.querySelector(".fill1").addEventListener("click", function () {
  document.querySelector(".fill1").style.display = "none";
});

//Click Like 2
document.querySelector(".empty2").addEventListener("click", function () {
  document.querySelector(".fill2").style.display = "flex";
});

document.querySelector(".empty2").addEventListener("click", function () {
  document.querySelector(".empty2").style.display = "none";
});

document.querySelector(".fill2").addEventListener("click", function () {
  document.querySelector(".empty2").style.display = "flex";
});

document.querySelector(".fill2").addEventListener("click", function () {
  document.querySelector(".fill2").style.display = "none";
});

//Click Like 3
document.querySelector(".empty3").addEventListener("click", function () {
  document.querySelector(".fill3").style.display = "flex";
});

document.querySelector(".empty3").addEventListener("click", function () {
  document.querySelector(".empty3").style.display = "none";
});

document.querySelector(".fill3").addEventListener("click", function () {
  document.querySelector(".empty3").style.display = "flex";
});

document.querySelector(".fill3").addEventListener("click", function () {
  document.querySelector(".fill3").style.display = "none";
});

//Click Like 4
document.querySelector(".empty4").addEventListener("click", function () {
  document.querySelector(".fill4").style.display = "flex";
});

document.querySelector(".empty4").addEventListener("click", function () {
  document.querySelector(".empty4").style.display = "none";
});

document.querySelector(".fill4").addEventListener("click", function () {
  document.querySelector(".empty4").style.display = "flex";
});

document.querySelector(".fill4").addEventListener("click", function () {
  document.querySelector(".fill4").style.display = "none";
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
