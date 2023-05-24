//snb 메뉴
let depth01Btns = document.querySelectorAll('.snb .depth01 .dep01');
Array.prototype.forEach.call(depth01Btns, function(e) {
  e.addEventListener('click', function() {
    depth01Btns.forEach(function(el) {
      el.parentNode.classList.remove('open')
    });
    if(e.parentNode.classList.contains('open')) e.parentNode.classList.remove('open');
    else e.parentNode.classList.add('open');
  })
});


//파일 업로드
$('.input-file').on('change',function(){
  var fileName = $('.input-file').val().split('\\')[this.value.split('\\').length-1];
  $('.upload-name').html(fileName);
  $('.upload-name').addClass('line');
  $('.del-btn').css('display','inline-block');
});
$('.del-btn').on('click', function() {
  $('.upload-name').html('선택된 파일 없음');
  $('.upload-name').removeClass('line');
  $('.del-btn').css('display','none');
});