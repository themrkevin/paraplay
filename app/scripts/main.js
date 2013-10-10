window.onscroll = function() {
	paraplay('.background','top',0.2);
}

function paraplay(el,direction,speed) {
	var scrolled = window.pageYOffset,
		element = document.querySelector(el);
	element.style[direction] = -(scrolled*speed)+'px';
}

function unicornTest() {
	var scrolled = window.pageYOffset,
		unicorn = document.querySelector('.unicorn');
	// element.style.l
}