/*    ==============
 *    Document build
 *    ==============
 */

var htmlHref = location.href;
requestSync('/fragments/head.html', 'head'); 

document.addEventListener('DOMContentLoaded', DCL());
function DCL() {
	requestAsync('fragments/header.html', 'header');
	if(~htmlHref.indexOf('io/projects/')) {
			requestAsync('fragments/nav_2.html', 'nav');
	}
	else {
		requestAsync('fragments/nav_1.html', 'nav');
	}
	requestAsync('fragments/footer.html', 'footer');
}

/*    ==================
 *    Async http request
 *    ==================
 */

function requestAsync(url, el) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();

	xhr.onreadystatechange = function() {
		if (this.readyState != 4) return;
		if (this.status != 200) {
			alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
			return;
		}
		var doc = document.createElement('html');
		doc.innerHTML = xhr.responseText;
		appendEl(doc.querySelector(el));
	};
	function appendEl(elem) {
		document.querySelector(el).insertAdjacentHTML("beforeEnd", elem.innerHTML);
	}
}

/*    =================
 *    Sync http request
 *    =================
 */

function requestSync(url, el) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		var doc = document.createElement('html');
		doc.innerHTML = xhr.responseText;
		appendEl(doc.querySelector(el));
	}
	function appendEl(elem) {
		document.querySelector(el).insertAdjacentHTML("beforeEnd", elem.innerHTML);
	}
}
