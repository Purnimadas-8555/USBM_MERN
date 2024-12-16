const BlinkingText = document.getElementById('Blinking Text');
function togglevisibility() {
  if(BlinkingText.style.visibility ==='hidden')  {
    BlinkingText.style.visibility ='visible';
  } else {
    BlinkingText.style.visibility ='hidden';
  }
}
setInterval(togglevisibility,1000);