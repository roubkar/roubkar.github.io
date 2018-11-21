document.addEventListener("DOMContentLoaded", event => {
	const navbar = document.querySelector("#navbar");
	let avatar = document.querySelector(".img-container");
	navbar.hidden = false;
	document.addEventListener("scroll", event => {
		requestAnimationFrame(() => {
			if (window.pageYOffset < 170) {
				navbar.style.opacity = 0;
				avatar.classList.remove("scale-out");
			} else {
				navbar.style.opacity = 1;
				avatar.classList.add("scale-out");
			}
		});
	});
});