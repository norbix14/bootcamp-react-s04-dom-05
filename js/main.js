document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')
	const btnBlackTheme = document.querySelector('#btnBlackTheme')
	const exContainer = document.querySelector('.contenedor-ej')

	const changeTheme = (target) => target.classList.toggle('dark-theme')

	btnBlackTheme.addEventListener('click', e => {
		if (!exContainer.classList.contains('dark-theme')) {
			btnBlackTheme.innerText = 'Volver al tema blanco'
		} else {
			btnBlackTheme.innerText = 'Cambiar a tema negro'
		}
		changeTheme(exContainer)
	})

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

})
