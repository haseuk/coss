window.addEventListener("scroll", initIntersectionObserver);
function initIntersectionObserver() {
  const iom = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.3) {
        entry.target.classList.add('mov-on');
      }
    })
  });
  const iof = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.3) {
        entry.target.classList.add('fade-on');
      }
    })
  });
  const mov = document.querySelectorAll('[mov]');
  const fade = document.querySelectorAll('[fade]');
  mov.forEach((el) => {
    iom.observe(el);
  });
  fade.forEach((el) => {
    iof.observe(el);
  });
}
window.onload = function() {
  initIntersectionObserver();
}


//엘리먼트에 mov는 하-> 상으로 움직이는 모션
//엘리먼트에 fade는 페이드인 모션