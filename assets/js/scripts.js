const cursor = document.querySelector(".cursor");

function moveCursor(event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
  
  const interactive = event.target.closest('a, button');

  if (interactive) {
    setCursor('interactive')
  } else {
    setCursor('default')
  }

  showCursor()
}

function showCursor() {
  cursor.hidden = false;
}

function hideCursor() {
  cursor.hidden = true;
}

function setCursor(state) {
  cursor.dataset.state = state;
}

document.onmousemove = moveCursor;
document.onmouseleave = hideCursor;
