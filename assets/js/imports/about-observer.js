const about = document.querySelector("#about")

function handleAboutIntersection(entries) {
  const [entry] = entries

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
})

aboutObserver.observe(about)