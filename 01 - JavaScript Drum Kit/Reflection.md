<div class="keys" tabindex="1">
this is a way to focus on a certain div on page load, Mentor and I did this to make sure that the .keys listener listening on the div was capturing the key presses


$(`.keys`).find(`[data-key=${keyCode}]`)...
This was a way to go into the class and find a certain div with the data-key with value of the keypress


mySound.trigger('play');
no native wraper in jquery for js 'play' function, this tells the element on the dom tree to trigger the js play function
