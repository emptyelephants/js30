'use strict'

function listenForKeyboard() {
  $('.keys').on('keydown',(event) => {
    highlightKey(event.keyCode);
    findSound(event.keyCode);
 })
  $('.keys').on('keyup',(event) => {
  removeHighlight(event.keyCode);
  })
}

function findSound(keyCode) {
  const mySound = $(`audio[data-key='${keyCode}']`)
  console.log(mySound);
  mySound.trigger('play');
}

function highlightKey(keyCode){
  $(`[data-key=${keyCode}]`).addClass('playing');
}

function removeHighlight(keyCode) {
  $(`[data-key=${keyCode}]`).removeClass('playing');
}

$(document).ready(listenForKeyboard());
