document.addEventListener("DOMContentLoaded", event => {
	const navbar = document.querySelector("#navbar");
	let avatar = document.querySelector(".img-container");
	document.addEventListener("scroll", event => {
		requestAnimationFrame(() => {
			if (window.pageYOffset < 120) {
				navbar.style.opacity = 0;
				avatar.classList.remove("scale-out");
				requestAnimationFrame(() => {
					navbar.hidden = true;
				});
			} else {
				navbar.hidden = false;
				requestAnimationFrame(() => {
					navbar.style.opacity = 1;
					avatar.classList.add("scale-out");
				});
			}
		});
	});
});