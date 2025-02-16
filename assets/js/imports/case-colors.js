const { color } = document.body.dataset

if (color) {

  const gradient = `linear-gradient(180deg in lab, var(--color-subtle), ${ color } )`
  document.body.style.backgroundImage = gradient
  document.body.style.backgroundAttachment = 'fixed'

}