var doc;

function documentLoaded() {
	temlate();
	appendElem('header');
	appendElem('footer');
}
document.addEventListener('DOMContentLoaded', documentLoaded);

function temlate() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/template/index.html', false);
	xhr.send();

	if (xhr.status != 200) {
		return alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
	} else {
		doc = document.createElement('html');
		doc.innerHTML = xhr.responseText;
	}
}

function appendElem(el) {
	var elem = document.querySelector(el);
	elem.innerHTML = doc.querySelector(el).innerHTML;
}
