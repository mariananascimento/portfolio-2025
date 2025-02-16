const imgs = document.querySelectorAll('.markdown p > img')

for (const img of imgs) {
  if (!img.title) continue
  img.parentElement.dataset.caption = img.title
}
