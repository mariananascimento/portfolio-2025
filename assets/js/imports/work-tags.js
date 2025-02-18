const links = document.querySelectorAll("#work a.card");

console.log(links);

function handleLinkIntersection(entries) {
  entries.forEach( entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hover')
    } else {
      entry.target.classList.remove('hover')
    }
  })
}

const linkObserver = new IntersectionObserver(handleLinkIntersection, {
    root: null, // viewport
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px", // Middle of the page
})

links.forEach(link => linkObserver.observe(link))

