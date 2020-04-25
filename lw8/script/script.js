var btn_prev = document.querySelector('.buttons .prev');
var btn_next = document.querySelector('.buttons .next');

var films = document.querySelectorAll('.films .slide');
console.log(films)

var i = 0;

btn_next.onclick = function(){
	films[i].style.display = 'none';
	i+=4;
	if (i >= films.length){
		i = 0;
	}
	films[i].style.display = 'block';
	
}

btn_prev.onclick = function(){
	films[i].onclick.display = 'none';
	i--;
	if(i < 0){
		i = films.length - 1;
	}
	films[i].style.display = 'block';
}