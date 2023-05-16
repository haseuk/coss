let selectValue = document.querySelectorAll('.selected-value');
let select = document.querySelector('.select');
Array.prototype.forEach.call(selectValue, function(e) {
  e.addEventListener('click', function() {
    let select = e.parentNode;
    if(select.classList.contains('open')) {
      optionClose(select);
    } else {
      for (let i = 0; i < selectValue.length; i++) {
        selectValue[i].parentNode.classList.remove('open');
      }
      optionOpen(select);
    }
  })
});

function optionOpen(v) {
  v.classList.add('open')
}
function optionClose(v) {
  v.classList.remove('open')
}

let optionValue = document.querySelectorAll('.opt-grp .option');
let directly = document.querySelector('.directly');
Array.prototype.forEach.call(optionValue, function(e) {
  e.addEventListener('click', function(e) {
    if(e.target.id === 'direct') {
      directly.classList.add('enable');
    } else if(directly) {
      directly.value = '';
      directly.classList.remove('enable');
    }
    let selectParentNode = e.target.parentNode.parentNode
    selectParentNode.children[0].innerHTML = e.target.textContent;
    optionClose(selectParentNode);
  })
})