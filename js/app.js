const popupMessage = document.querySelector('.card__social')

const btn = document.querySelector('.card__btn')

const displayPopup = () => {
  popupMessage.classList.toggle('display-message')
}

btn.addEventListener('click', displayPopup)
