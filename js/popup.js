function popupPos(v) {
  let popupTop = 0;
  let top = document.body.scrollTop || document.documentElement.scrollTop;
  let popupInner = document.querySelector('.'+v);
  setTimeout(function() {
    let popupHeight = document.querySelector('.'+v).clientHeight;
    let marginForCenter = (window.innerHeight - popupHeight) / 2;
    let scrollBody = document.body.scrollTop > 0 ? document.body : document.documentElement;
    if (window.innerHeight <= popupHeight) {
      marginForCenter = 100;
    }
    if (popupTop === 0) {
      popupTop = top;
      popupInner.style.marginTop = top + marginForCenter + 'px';
    } else {
      scrollBody.scrollTop = popupTop;
    }
  })
}