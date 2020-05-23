const leftBtn = document.getElementById	("leftbtn");
const rightBtn = document.getElementById("rightbtn");

function slide(event) {
	const slider = document.getElementsByClassName("content_films_info")[0];
	let transitionElem;
	if(this.id === "leftbtn") {
		transitionElem = slider.removeChild(slider.firstElementChild);
		slider.append(transitionElem);
	} else if (this.id === "rightbtn") {
		transitionElem = slider.removeChild(slider.lastElementChild);
		slider.prepend(transitionElem);
	}
}

leftBtn.addEventListener('click', slide);
rightBtn.addEventListener('click', slide);