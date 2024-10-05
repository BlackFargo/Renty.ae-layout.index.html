const language = document.querySelector('#language')
const languageMenu = document.querySelector('#language-menu')

language.addEventListener('click', () => {
	if (languageMenu.classList.contains('display') == true) {
		languageMenu.classList.remove('display')
	} else {
		languageMenu.classList.add('display')
	}
})

const currency = document.querySelector('#currency')
const currencyMenu = document.querySelector('#currency-menu')

currency.addEventListener('click', () => {
	if (currencyMenu.classList.contains('display') == true) {
		currencyMenu.classList.remove('display')
	} else {
		currencyMenu.classList.add('display')
	}
})

const headerPerson = document.querySelector('#header-person')
const formsMenu = document.querySelector('#forms')

headerPerson.addEventListener('click', () => {
	if (formsMenu.classList.contains('display') == true) {
		formsMenu.classList.remove('display')
	} else {
		formsMenu.classList.add('display')
	}
})

const headerLocation = document.querySelector('#location')
const locationList = document.querySelector('#location-list')

headerLocation.addEventListener('click', () => {
	if (locationList.classList.contains('display') == true) {
		locationList.classList.remove('display')
	} else {
		locationList.classList.add('display')
	}
})

const burger = document.querySelector('#burger')
const burgerMenu = document.querySelector('#burger-menu')

burger.addEventListener('click', () => {
	if (burgerMenu.classList.contains('display') == true ) {
		burgerMenu.classList.remove('display')
	}
	else {
		burgerMenu.classList.add('display')
	}
})
