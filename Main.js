const language = document.querySelector('#language')
const languageMenu = document.querySelector('#language-menu')
const languageItems = languageMenu.getElementsByTagName('li')



language.addEventListener('click', () => {
	if (languageMenu.classList.contains('display') == true) {
		languageMenu.classList.remove('display')
	} else {
		languageMenu.classList.add('display')
	}
})

  Array.from(languageItems).forEach(item => {
		item.addEventListener('click', () => {
			language.innerHTML = `<i class="fa-solid fa-globe"></i> ${item.textContent} &blacktriangledown;`
			languageMenu.classList.add('display') 
		})
	})



const currency = document.querySelector('#currency')
const currencyMenu = document.querySelector('#currency-menu')
const currencyItems = currencyMenu.getElementsByTagName('li')

	Array.from(currencyItems).forEach(item => {
		item.addEventListener('click', () => {
			currency.innerHTML = `${item.textContent} &blacktriangledown;`
			currencyMenu.classList.add('display');
		})
	})

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
const locationItems = locationList.getElementsByTagName('li')

Array.from(locationItems).forEach(item => {
	item.addEventListener('click', () => {
	headerLocation.innerHTML = `${item.innerHTML} &blacktriangledown;`;
		locationList.classList.add('display')
	})

})


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




const dialog = document.querySelector('[data-dialog], [data-dialog-yacht]');
const openModals = document.querySelectorAll('[data-car], [data-yacht]');
const closeModal = document.querySelector('[data-close]');
const closeView = document.querySelector('[data-view-all]');



function openModalAndBlockScroll() {
	dialog.showModal()
	document.body.classList.add('scroll-block')
}

function returnScroll() {
	document.body.classList.remove('scroll-block')
}

function close() {
	dialog.close()
	returnScroll()
}
function closeOnOverlayClick({ currentTarget, target }) {
	const dialog = currentTarget
	const isOnOverlayClick = target === dialog
	if (isOnOverlayClick) {
		close()
	}
}

openModals.forEach(modal => {
	modal.addEventListener('click', openModalAndBlockScroll)
})

closeModal.addEventListener('click', close)

dialog.addEventListener('click', closeOnOverlayClick)

dialog.addEventListener('cancel', returnScroll)

closeView.addEventListener('click', close)


const block = document.getElementsByClassName('close-modal')

function hide() {

	if (block.length > 0) {
		block[0].style.display = 'none'
	}
}

hide();

const images = document.querySelectorAll('.slider-img')
const controls = document.querySelectorAll('.controlls') 
let imageIndex = 0;

function show(index) {
	images[imageIndex].classList.remove('active')
	images[index].classList.add('active')
	imageIndex = index
}

controls.forEach(control => {
	control.addEventListener('click', event => {
		if (event.target.classList.contains('prev')) {
			let index = imageIndex - 1

			if (index < 0) {
				index = images.length - 1
			}
			show(index)
		} else if (event.target.classList.contains('next')) {
			let index = imageIndex + 1

			if (index >= images.length) {
				index = 0
			}
			show(index)
		}
	})
})

show(imageIndex)

const googleMap = document.querySelector('.google__map');
const googleOverlay = document.querySelector('.google__map-overlay');

googleMap.addEventListener('click', () => {
	googleOverlay.classList.add('hide')
})
