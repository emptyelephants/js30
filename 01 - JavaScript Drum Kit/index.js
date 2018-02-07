'use strict'

function listenForKeystroke(event) {
  console.log('in event listener');
  $('.keys').on('keydown',(event) => {
    console.log('weee',event.keyCode);
   highlightKey(event.keyCode);
 })
 $('.keys').on('keyup',(event) => {
  console.log('wwhoaaa',event.keyCode);
  removeHighlight(event.keyCode);
})
}

function highlightKey(keyCode){
  $(`.keys`).find(`[data-key=${keyCode}]`).addClass('playing');
}
function removeHighlight(keyCode) {
  $(`.keys`).find(`[data-key=${keyCode}]`).removeClass('playing');
}
$(document).ready(listenForKeystroke());
