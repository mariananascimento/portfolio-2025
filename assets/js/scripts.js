const cursor = document.querySelector(".cursor");

function color(name) {
  return `var(--color-${name})`
}

function gradient(from, to) {
  return `linear-gradient(in lab, ${ color(from)}, ${color(to)} )`;
}

function moveCursor(event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
  
  const interactive = event.target.closest('a, button');

  if (interactive) {
    setCursor('interactive')
    colorCursor(interactive.dataset.tags)
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

function colorCursor(tagString) {
  if (!tagString) return;

  const tags = tagString.split('+').map(tag => tag.trim());
  const [from, to] = tags;

  cursor.style.backgroundColor = color(from);
  cursor.style.backgroundImage = to ? gradient(from,to) : 'none';
}

document.onmousemove = moveCursor;
document.onmouseleave = hideCursor;
