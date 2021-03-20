const accordion = [...document.getElementsByClassName('content-box')]

accordion.forEach(box => {
	box.addEventListener('click', () => {
		box.classList.toggle('active')
	})
})
