const dark = document.querySelector("#dark")

function handleAboutIntersection(entries) {
  const [entry] = entries

  if (entry.isIntersecting) {
    document.body.dataset.theme = 'dark'
  } else {
    document.body.dataset.theme = 'light'
  }
}

const darkObserver = new IntersectionObserver(handleAboutIntersection, {
  root: null,
  threshold: 0,
  rootMargin: "-72px",
})

darkObserver.observe(dark)