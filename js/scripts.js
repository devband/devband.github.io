/*
 *		header hidden
 */

var body = document.body;
var header = document.querySelector("header");
var header_container = document.querySelector(".header_container");
var nav = document.querySelector("nav");
var header_container_height = header_container.clientHeight;

function bodyPaddingTop() {
	body.style.paddingTop = header.clientHeight + "px";
//	alert(header_container.clientHeight);
}
bodyPaddingTop();

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
 *		Menu toggler
 */

function hidden_menu(button) {
//	alert();
	var button_menu = document.querySelectorAll('.menu.contacts');
	var content = button.parentNode.querySelector('.menu.contacts');
	for (var i = 0; i < button_menu.length; i++ ) {
		if (!button_menu[i].classList.contains("close")) {
			button_menu[i].classList.add("close");
		}
	}
	content.classList.remove('close');
}

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

gallery.addEventListener('click', function() {
//	alert(event.target.parentNode.innerHTML);
						 });
