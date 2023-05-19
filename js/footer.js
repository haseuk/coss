var swiperInner8 = new Swiper("footer .swiper-inner8", {
  slidesPerView: 3,
  spaceBetween: 15,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction:false,
  },
  breakpoints: {
    1080: {
      slidesPerView: 5,
      spaceBetween: 19,
    }
  },
  navigation: {
    nextEl: "footer .inner8-next",
    prevEl: "footer .inner8-prev",
  },
});

let links = document.querySelectorAll('.link');
Array.prototype.forEach.call(links, function(e) {
  e.addEventListener('click', function() {
    if(e.parentNode.classList.contains('open')){
      e.parentNode.classList.remove('open');
    } else {
      e.parentNode.classList.add('open');
    }
  })
});

// let goTop = document.querySelector('.top');
// goTop.addEventListener('click', function() {
//   window.scroll(0,0)
// });