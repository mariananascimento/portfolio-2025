const balloons = document.querySelectorAll('.balloon')

balloons.forEach((balloon) => {
  balloon.onclick = () => {
    balloon.dataset.count++
  }
})