/*
 *		header hidden
 */ 

var body = document.body;
var header = document.querySelector("header");
var header_container = document.querySelector(".header_container");
var nav = document.querySelector("nav");
var header_container_height = header_container.clientHeight;

window.addEventListener("scroll", headerHidden);
function headerHidden() {
	if (nav.getBoundingClientRect().top <= 20) {
		header_container.classList.add("hidden");
		header.classList.add("fixed");
	}
	if (window.pageYOffset < header_container_height) {
		header_container.classList.remove("hidden");
		header.classList.remove("fixed");
	}
}

/*
 *		Content Padding Top
 */

function bodyPaddingTop() {
	body.style.paddingTop = header.clientHeight + "px";
}
bodyPaddingTop();
window.addEventListener("orientationchange", function() {
	bodyPaddingTop();
}, false);

/*
 *		Menu toggler
 */

function hidden_menu(target) {
	var button_menu = document.querySelectorAll('.menu.contacts');
	var clickedButton = target.parentNode.querySelector('.menu.contacts');
	function closeAll() {
		for (var i = 0; i < button_menu.length; i++) {
			button_menu[i].classList.add("close");
		}
	}
	if (clickedButton.classList.contains("close")) {
		closeAll();
		clickedButton.classList.remove('close');
	} else {
		closeAll();
	}
}

/*
 *		Copy number purse
 */

function copyPurseNumber(link) {
	prompt("Вы можете скопировать номер кошелька:", link.title);
}

/*
 *		Swipe
 */

// Переход по страницам 

var pages = ['index.html','projects.html','contacts.html'];
location.href.indexOf( 'index.html' );

function changePageSwipe() {
	pages.forEach(function(item,i,arr) {
		
	});
}

// -----

var startPoint = {};
var nowPoint;
var ldelay;
document.addEventListener('touchstart', function(event) {
//	event.preventDefault();
	event.stopPropagation();
	startPoint.x = event.changedTouches[0].pageX;
	startPoint.y = event.changedTouches[0].pageY;
	ldelay = new Date();
}, false);
/*Ловим движение пальцем*/
document.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	var otk = {};
	nowPoint = event.changedTouches[0];
	otk.x = nowPoint.pageX - startPoint.x;
	/*Обработайте данные*/
	/*Для примера*/
	if (Math.abs(otk.x) > 200) {
		if (otk.x < 0) { /*СВАЙП ВЛЕВО(ПРЕД.СТРАНИЦА)*/
			
		}
		if (otk.x > 0) { /*СВАЙП ВПРАВО(СЛЕД.СТРАНИЦА)*/
			
		}
		startPoint = {
			x: nowPoint.pageX,
			y: nowPoint.pageY
		};
	}
}, false);
/*Ловим отпускание пальца*/
document.addEventListener('touchend', function(event) {
	var pdelay = new Date();
	nowPoint = event.changedTouches[0];
	var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
	var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
	if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime() - ldelay.getTime()) < 200) {
		if (xAbs > yAbs) {
			if (nowPoint.pageX < startPoint.x) { /*СВАЙП ВЛЕВО*/ } else { /*СВАЙП ВПРАВО*/ }
		} else {
			if (nowPoint.pageY < startPoint.y) { /*СВАЙП ВВЕРХ*/ } else { /*СВАЙП ВНИЗ*/ }
		}
	}
}, false);

/*
 *		Gallery	
 */ 

var gallery = document.querySelector('.gallery > div');

var massPic = [
	'light.png',
	'dark.png',
	'black.png',
	'material_light.png',
	'material_dark.png',
	'material_black.png',
	'white_old.png'
];

for (var i = 0; i < massPic.length; i++) {
	var pic = massPic[i];
	var a = document.createElement('a');
	var img = document.createElement('img');
	a.href = 'src/' + pic;
	img.src = 'src/mini-' + pic;
	img.alt = pic;
	a.appendChild(img);
	gallery.appendChild(a);

}
