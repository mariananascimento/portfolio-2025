const { color } = document.body.dataset

if (color) {

  const from = `var(--color-subtle)`
  const to = `color-mix(in srgb, ${color} 50%, transparent)` 

  const gradient = `linear-gradient(180deg in lab, ${from}, ${to})`
  document.body.style.backgroundImage = gradient
  document.body.style.backgroundAttachment = 'fixed'

}