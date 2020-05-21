
	/*const leftbtn = document.getElementById	("leftbtn");
	 const rightbtn = document.getElementById('rightbtn');
	 let cover = document.getElementsByClassName('content_fims_info');//Родитель для carusel_films
	// cover = cover[0];
	// const carusel_films = document.getElementsByClassName('slide_film');//Блоки фильмов
	leftbtn.addEventListener('click', slide);
	// //rightbtn.addEventListener('click', slideRight);
	// leftbtn.addEventListener('click', slideLeft);
	// cover.style.position = 'relative';

	//cover.style.left = '0px';
	// console.log(carusel_films);

	// function slideLeft() {
	// 	let left = cover.style.left;
	// 	left = left.split('');
	// 	let arr = [];
	// 	for(let i = 0; i < left.length ; i++) {
	// 		  if (left[i] == 'p') {
	// 		 	break;
	// 		 } else {
	// 			arr[i] = left[i];
	// 		}
	// 	}
	// 	arr = arr.join('');
	// 	let next = arr - 300;
	// 	cover.style.left = next + 'px';
	// 	filmMoveRight();
	// }
	// carusel_films[0].position = 'relative';
	// function filmMoveRight() {
	// 	console.log(carusel_films[0]);
		
	// 		carusel_films[0].style.left = '-1500px';
	// 		// let del_film = cover.removeChild(carusel_films[0]);
	// 		// cover.append(del_film);
	// }

	function slide(e) {
		const slider = document.getElementsByClassName('content_films_info');
		console.log(slider)
		let btnTarget = this.id;
		
		let tempMovie;
		if (btnTarget === 'leftbtn') {
			tempMovie = slider.firstElementChild;
			tempMovie = slider.removeChild(tempMovie);
			slider.append(tempMovie);
		}

	}*/ 

function swap(e) {
	const slider = document.getElementsByClassName('content_fims_info')[0];
	const whichButton = e.target.id;
	let tempFilm = null;
	if(whichButton === 'leftbtn') {
		tempFilm = slider.firstElementChild;
		tempFilm = slider.removeChild(tempFilm);
		slider.append(tempFilm);
	} else if (whichButton === 'rightbtn') {
		tempFilm = slider.lastElementChild;
		tempFilm = slider.removeChild(tempFilm);
		slider.prepend(tempFilm);
	}
}

function run() {
	const leftbtn = document.getElementById	("leftbtn");
	const rightbtn = document.getElementById('rightbtn');
	leftbtn.addEventListener('click', swap);
	rightbtn.addEventListener('click', swap);
}
window.onload = run;