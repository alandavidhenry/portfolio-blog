document.addEventListener('DOMContentLoaded', () => {
  const portfolioCards = document.querySelectorAll('.portfolio-card')

  portfolioCards.forEach((card) => {
    card.addEventListener('click', () => {
      const description = card.querySelector('.description')
      const fullDescription = card.querySelector('.full-description')
      const url = card.querySelector('.url')
      const github = card.querySelector('.github')

      description.classList.add('hidden')
      fullDescription.classList.remove('hidden')
      url.classList.remove('hidden')
      github.classList.remove('hidden')
      card.dataset.expanded = 'true'
    })
  })
})
