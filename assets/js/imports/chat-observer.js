const chat = document.querySelector(".chat")
let previousY = 0

function handleChatIntersection(entries) {
  const [entry] = entries
  const currentY = entry.boundingClientRect.y
  const direction = currentY < previousY ? "down" : "up"

  if (entry.isIntersecting) {
    chat.classList.add('animate')
  } else if (direction === "up") {
    chat.classList.remove('animate')
  }

  previousY = currentY
}

const chatObserver = new IntersectionObserver(handleChatIntersection, {
  root: null,
  threshold: .1,
})

chatObserver.observe(chat)
