let sections = document.querySelectorAll('section');

window.onscroll = () => {
	sections.forEach(ms => {
		let top = window.scrollY;
		let offset = ms.offsetTop; - 150;
		let height = ms.offsetHeight;

		if (top >= offset && top < offset + height) {
			ms.classList.add('show-animate')
		}
		else {
			ms.classList.remove('show-animate')
		}
	})
}