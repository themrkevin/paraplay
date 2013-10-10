window.onscroll = function() {
	paraplay('.background','top',0.2);
	// unicornTest();
	doge();
}

function paraplay(el,direction,speed) {
	var scrolled = window.pageYOffset,
		element = document.querySelector(el);
	element.style[direction] = -(scrolled*speed)+'px';
}

function doge() {
	var dogeSec = document.getElementById('doge'),
		scrolled = window.pageYOffset,
		dogeTop = dogeSec.offsetTop,
		dogeSpy = document.querySelector('.dogespy'),
		doge1 = document.querySelector('.doge1'),
		dogeR = document.querySelector('.doger'),
		dogeB = document.querySelector('.dogeb');

	var dogeBClasses = dogeB.className;

	dogeSpy.style.bottom = (-(scrolled) - 200) + 'px';

	if(dogeTop - scrolled > 0) {
		doge1Formula = (dogeTop - scrolled)*0.8;
		doge1.style.top = doge1Formula + 'px';
		dogeR.style.top = doge1.height + 10 + (dogeTop - scrolled) + 'px';

		if(doge1Formula > 60) {
			console.log('yes',doge1.style.top);
		} else {
			console.log('no',doge1.style.top);
		}
	}
}