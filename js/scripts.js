var nav,
	main,
	header,
	footer,
	header_container,
	header_container_height;

document.addEventListener('DOMContentLoaded', domContentLoaded);

function domContentLoaded() {

	body = document.body;
	header = document.querySelector("header");
	header_container = document.querySelector(".header_container");
	nav = document.querySelector("nav");
	header_container_height = header_container.clientHeight;

	/*
	 *		Progress bar
	 */

	var progressBar = document.createElement('div');
	progressBar.className = 'progressbar';
	progressBar.innerHTML = '<span></span>';
	document.body.insertBefore(progressBar, document.querySelector('header'));
	document.body.classList.add('load');
	window.addEventListener('load', windowLoad);

	function windowLoad() {
		document.body.classList.remove('load');
		bodyPaddingTop();
	}
}

/*
 *		header hidden
 */

window.addEventListener("scroll", headerHidden);

function headerHidden() {
	if (nav.getBoundingClientRect().top <= 20) {
		header_container.classList.add("hidden");
		header.classList.add("fixed");
	}
	if (window.pageYOffset < header_container_height) {
		header_container.classList.remove("hidden");
		header.classList.remove("fixed");
		bodyPaddingTop();
	}
}

/*
 *		Content Padding Top
 */

function bodyPaddingTop() {
	body.style.paddingTop = header.clientHeight + "px";
}
header.addEventListener('resize', bodyPaddingTop, false);

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

var pages = ['index.html', 'projects.html', 'developers.html'];

function swipePage(index) {
	if (location.pathname == "/" && index == +1) {
		location.href = location.href + pages[1];
	}
	pages.forEach(function(item, i, arr) {
		if (~location.href.indexOf(item)) {
			if (pages[i + index] != undefined) location.href = pages[i + index];
		}
	});
}

// touch hendler

(function() {
	var startX, startY, moveY, moveX, start, swipelangth = 200;

	window.addEventListener('touchstart', function(e) {
		startX = e.changedTouches[0].pageX;
		startY = e.changedTouches[0].pageY;
		start = new Date;
	}, false);
	window.addEventListener('touchmove', function(e) {
		moveX = e.changedTouches[0].pageX;
		moveY = e.changedTouches[0].pageY;
		if (Math.abs(moveX - startX) > Math.abs(moveY - startY)) {
			e.preventDefault();
		}
	});
	window.addEventListener('touchend', function(e) {
		if (new Date - start < 500) {
			if (moveX - startX >= swipelangth) {
				swipePage(-1);
			}
			if (startX - moveX >= swipelangth) {
				swipePage(+1);
			}
		}
	});
})();

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
