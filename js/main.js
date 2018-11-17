document.addEventListener("DOMContentLoaded", event => {
	document.addEventListener("scroll", event => {
		requestAnimationFrame(() => {
			let avatar = document.querySelector(".img-container");
			if (window.pageYOffset < 170) {
				document.querySelector("#navbar").style.opacity = 0;
				avatar.classList.remove("scale-out");

			} else {
				document.querySelector("#navbar").style.opacity = 1;
				avatar.classList.add("scale-out");
			}
		});
	});
});