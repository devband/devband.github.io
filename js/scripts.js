var nav,
	main,
	header,
	footer,
	galleryAll,
	header_container,
	header_container_height;

document.addEventListener('DOMContentLoaded', domContentLoaded, false);

function domContentLoaded() {

	body = document.body;
	header = document.querySelector("header");
	header_container = document.querySelector(".header_container");
	nav = document.querySelector("nav");
	header_container_height = header_container.clientHeight;
	galleryAll = document.querySelectorAll('.gallery');

	progressBar();
	galleryBuilder();
}

window.addEventListener('load', windowLoad, false);

function windowLoad() {
	document.body.classList.remove('load');
	bodyPaddingTop();
}

/*
 *		Progress bar
 */

function progressBar() {
	var progressBar = document.createElement('div');
	progressBar.className = 'progressbar';
	progressBar.innerHTML = '<span></span>';
	document.body.insertBefore(progressBar, document.querySelector('header'));
	document.body.classList.add('load');
}

/*
 *		Gallery	
 */

function galleryBuilder() {
	for (var j = 0; j < galleryAll.length; j++) {
		var gallery = galleryAll[j];
		for (i = 1; i < 15; i++) {
			var a = document.createElement('a');
			var img = document.createElement('img');
			a.href = 'images/' + i + '.png';
			img.src = 'images/' + i + '.png';
			img.alt = i + '.png';
			a.appendChild(img);
			gallery.appendChild(a);
		}
	}
};

/*
 *		Content Padding Top
 */

function bodyPaddingTop() {
	body.style.paddingTop = header.clientHeight + "px";
}
window.addEventListener('resize', bodyPaddingTop, false);

/*
 *		Header Hidden
 */

window.addEventListener("scroll", headerHidden);

function headerHidden() {
	if (nav.getBoundingClientRect().top <= 0) {
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
 *		Swipe
 */

(function() {

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

	var startX, startY, moveY, moveX, start, swipelangth = 150;

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
	}, false);
	window.addEventListener('touchend', function(e) {
		if (new Date - start < 500) {
			if (moveX - startX >= swipelangth) {
				swipePage(-1);
			}
			if (startX - moveX >= swipelangth) {
				swipePage(+1);
			}
		}
	}, false);
})();

/*
 *		Menu Toggler
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
 *		Desqus comments
 */

function createDesque(el) {
	var d = document,
		s = d.createElement('script');
	s.src = 'https://devband.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);

	var noscript = document.createElement('noscript');
	noscript.innerHTML = 'Пожалуйста включите JavaScript что бы увидеть <a href="https://disqus.com/?ref_noscript">комментарии от Disqus.</a>';
	el.parentNode.insertBefore(noscript, el.nextSibling);

	el.classList.add("hide");
}
