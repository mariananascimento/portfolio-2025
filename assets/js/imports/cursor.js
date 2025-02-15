const cursor = document.querySelector(".cursor")

function color(name) {
  return `var(--color-${name})`
}

function gradient(from, to) {
  return `linear-gradient(in lab, ${ color(from)}, ${color(to)} )`
}

function moveCursor(event) {
  cursor.style.top = event.y + "px"
  cursor.style.left = event.x + "px"
  
  const interactive = event.target.closest('a, button')

  if (interactive) {
    const {text, tags} = interactive.dataset
    setCursor('interactive', text)
    colorCursor(tags)
  } else {
    setCursor('default')
    colorCursor()
  }

  showCursor()
}

function showCursor() {
  cursor.hidden = false
}

function hideCursor() {
  cursor.hidden = true
}

function setCursor(state, text = '') {
  cursor.dataset.state = state
  cursor.dataset.text = text
}

function colorCursor(tagsString) {
  if (!tagsString) {
    cursor.style.backgroundColor = 'var(--color-background)'
    cursor.style.backgroundImage = 'none'
    return
  }

  const tags = tagsString.split(',').map(tag => tag.trim())

  const [from, to] = tags

  cursor.style.backgroundColor = color(from)
  cursor.style.backgroundImage = to ? gradient(from,to) : 'none'
}

document.onmousemove = moveCursor
document.onmouseleave = hideCursor