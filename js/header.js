let winW = window.innerWidth;
let winH = window.innerHeight;
function handleWinSize() {
  winW = window.innerWidth;
  winH = window.innerHeight;
}

let linkWrap = document.querySelector('.link-wrap');
let goTop = document.querySelector('.top');

window.addEventListener('resize', handleWinSize);
window.addEventListener('scroll', pageScroll);
//스크롤 반응에 따른 해더 배경 변경
let scrollY;
function pageScroll() {
  scrollY = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollY > 10) headerScrolled();
  else headerScrollOff();
  if((scrollY + winH) >= document.documentElement.scrollHeight) {
    linkWrap.classList.add('btt');
    goTop.classList.add('btt');
  } else {
    linkWrap.classList.remove('btt');
    goTop.classList.remove('btt');
  }
}

//gnb - mobile
let dep1Btn = document.querySelectorAll('.dep1-btn');
Array.prototype.forEach.call(dep1Btn, function(e) {
  e.addEventListener('click', function() {
    if(e.parentNode.classList.contains('active')) {
      e.parentNode.classList.remove('active');
    } else {
      menuListClose();
      e.parentNode.classList.add('active');
    }
  })
});

//열린 메뉴리스트 전체 닫기- 모바일
function menuListClose() {
  for (let k = 0; k < dep1Btn.length; k++) {
    dep1Btn[k].parentNode.classList.remove('active');
  }
}
//메뉴 열고 닫기 - 공통
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');
menu.addEventListener('click', function() {
  if(nav.classList.contains('open')) {
    navClose();
    swiperEnable();
  } else {
    navOpen();
    swiperDisable();
  }
});
//메뉴 닫기 - 모바일
let gnbClose = document.querySelector('.gnb-close');
gnbClose.addEventListener('click', function() {
  navClose();
  menuListClose();
  swiperEnable();
});

//해더 마우스 오버 - pc
let header = document.querySelector('header');
header.addEventListener('mouseover', headerOpen);
header.addEventListener('mouseleave', headerClose);
nav.addEventListener('mouseover', headerOpen);
nav.addEventListener('mouseleave', headerClose);
nav.addEventListener('mouseleave', navClose);







//06.16 추가
let wrap = document.querySelector('.wrap');

// 해더 메뉴 열기 - pc
function headerOpen() {
  header.classList.add('open');
  wrap.classList.add('header-open');//06.16 추가
}
// 해더 메뉴 닫기 - pc
function headerClose() {
  header.classList.remove('open');
  wrap.classList.remove('header-open');//06.16 추가
}







// nav 메뉴 열기
function navOpen() {
  nav.classList.add('open');
}
// nav 메뉴 닫기
function navClose() {
  nav.classList.remove('open');
}

// 스크롤시 해더 오픈효과
function headerScrolled() {
  header.classList.add('scroll');
}

// 스크롤시 해더 닫힘 효과
function headerScrollOff() {
  header.classList.remove('scroll');
}

let gnbWrap = document.querySelector('.gnb-wrap');
// 각 메뉴 마우스 오버시 각 메뉴 리스트 열기
function depth2GnbOpen(v) {
  navClose();
  headerOpen();
  gnbWrap.classList.add(v);
}
function depth2GnbClose(v) {
  headerClose();
  gnbWrap.classList.remove(v);
}