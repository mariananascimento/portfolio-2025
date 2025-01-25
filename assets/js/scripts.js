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

// Observer for About
const about = document.querySelector("#about");

function handleAboutIntersection(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    document.body.dataset.theme = 'dark'
  } else {
    document.body.dataset.theme = 'light'
  }
}

const aboutObserver = new IntersectionObserver(handleAboutIntersection, {
  root: null,
  threshold: 0,
  rootMargin: "-96px",
});

aboutObserver.observe(about);

// Observer for Chat
const chat = document.querySelector(".chat");

function handleChatIntersection(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    chat.classList.add('animate')
  } else {
    chat.classList.remove('animate')
  }
}

const chatObserver = new IntersectionObserver(handleChatIntersection, {
  root: null,
  threshold: .1,
});

chatObserver.observe(chat);

// Emoji reactions for Chat
const messages = chat.querySelectorAll('.message');

messages.forEach((message) => {
  message.onclick = () => {
    message.dataset.count++
    // message.querySelector('.react');
  }
})