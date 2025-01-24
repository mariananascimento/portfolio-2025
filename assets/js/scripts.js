const cursor = document.querySelector(".cursor")
// const interactives = document.querySelectorAll('a, button')

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

  // const delay = text === '' ? 200 : 0

  // clearTimeout(timeout)

  // timeout = setTimeout(() => {
    cursor.dataset.text = text
  // }, delay)
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

// interactives.forEach( interactive => {
//   document.onmouseenter = ()
// })

// Observer
const about = document.querySelector("#about");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-96px",
};

function handleIntersection(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    document.body.dataset.theme = 'dark'
  } else {
    document.body.dataset.theme = 'light'
  }
}

const sectionObserver = new IntersectionObserver(handleIntersection, options);
sectionObserver.observe(about);
