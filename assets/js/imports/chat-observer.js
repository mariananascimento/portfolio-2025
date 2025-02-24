const wrappers = document.querySelectorAll(".message-wrapper");

wrappers.forEach( function(wrapper) {
  const options = {
    root: null,
    rootMargin: '0% 0% -5% 0%',
    threshold: 1,
  }

  let previousY = 0

  const handleWrapperIntersection = (entries) => {
    const [entry] = entries
    const currentY = entry.boundingClientRect.y
    const direction = currentY < previousY ? "down" : "up"

    const message = entry.target.firstElementChild;

    if (entry.isIntersecting) {
      message.classList.add('animate')
    } else if (direction === "up") {
      message.classList.remove('animate')
    }

    previousY = currentY
  }

  const wrapperObserver = new IntersectionObserver(handleWrapperIntersection, options)
  wrapperObserver.observe(wrapper)
})