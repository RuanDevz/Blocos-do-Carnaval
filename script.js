const select = document.getElementById('select')
const search = document.getElementById('search')
const cards = document.querySelectorAll('.item')

function filterCards() {
  const selectedOption = select.value
  const searchValue = search.value.toLowerCase()
  cards.forEach(card => {
    const cardOption = card.getAttribute('data-option')
    const cardTitle = card.querySelector('h2').textContent.toLowerCase()
    if ((selectedOption === 'todos' || cardOption === selectedOption) && cardTitle.includes(searchValue)) {
      card.style.display = 'flex'
    } else {
      card.style.display = 'none'
    }
  })
}

select.addEventListener('change', filterCards)
search.addEventListener('input', filterCards)
