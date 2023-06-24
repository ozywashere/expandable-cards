const panels = document.querySelectorAll('.cards__panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
