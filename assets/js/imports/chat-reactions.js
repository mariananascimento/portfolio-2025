const messages = document.querySelectorAll('.message')

messages.forEach((message) => {
  message.onclick = () => {
    message.dataset.count++
  }
})