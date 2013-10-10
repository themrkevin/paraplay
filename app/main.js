window.onscroll = function() {
	paraplay('.background','top',0.2);
	// paraplay('.unicorn','left')
}

function paraplay(el,direction,speed) {
	var scrolled = window.pageYOffset,
		element = document.querySelector(el);
	element.style[direction] = -(scrolled*speed)+'px';
}