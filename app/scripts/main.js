window.onscroll = function() {
	bg('.background','top',0.2);
	bg('.uniground','top',0.2);
	doge();
}
function bg(el,direction,speed) {
	var scrolled = window.pageYOffset,
		element = document.querySelector(el);
	element.style[direction] = -(scrolled*speed)+'px';
}
function doge() {
	var dogeSec = document.getElementById('doge'),
		scrolled = window.pageYOffset,
		dogeTop = dogeSec.offsetTop,
		dogeSpy = dogeSec.querySelector('.dogespy'),
		doge1 = dogeSec.querySelector('.doge1'),
		dogeR = dogeSec.querySelector('.doger'),
		dogeB = dogeSec.querySelector('.dogeb');

	dogeSpy.style.bottom = (-(scrolled) - 200) + 'px';

	if(dogeTop - scrolled > 0) {
		doge1Formula = (dogeTop - scrolled)*0.8;
		doge1.style.top = doge1Formula + 'px';
		dogeR.style.top = doge1.height + 10 + (dogeTop - scrolled) + 'px';

		if(doge1Formula < 80) {
			addClass(dogeB,'ohhai');
			// console.log('yes',doge1.style.top);
		} else {
			removeClass(dogeB,'ohhai');
			// console.log('no',doge1.style.top);
		}
	}
}
function addClass(el,name) {
	var classes = el.className.split(' ');
	if(classes.inArray(name)) return false;
	classes.push(name);
	classes = classes.join(' ');
	el.className = classes;
}
function removeClass(el,name) {
	var classes = el.className.split(' '),
		l = classes.length;
	if(!classes.inArray(name)) return false;
	classes.remove(classes.indexOf(name))
	classes = classes.join(' ');
	el.className = classes;
}
// Check if something is inside an array
Array.prototype.inArray = function(name) {
	var l = this.length;
	for(i=0; i<l; i++) {
		if(this[i] === name) return true;
	}
	return false;
}
// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
}