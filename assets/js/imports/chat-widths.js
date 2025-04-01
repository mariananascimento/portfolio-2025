const messages = document.querySelectorAll('.message')

function resizeMessages() {
  messages.forEach((message) => {

    const textNode = message.querySelector('span').childNodes[0];
    if (!textNode) return;

    const balloon = message.querySelector('.balloon');

    const range = document.createRange();
    range.selectNodeContents(textNode);
    const { width } = range.getBoundingClientRect();

    balloon.style.width = `calc(${width}px + 1.5em)`; 
  })
}

window.addEventListener('resize', resizeMessages);
setInterval(resizeMessages, 500)
