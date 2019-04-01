// Does item have class?
function hasClass(elem, className) {
	return elem.className.split(' ').indexOf(className) > -1;
}

// Show YouTube Video
function showVideo(event) {
	event.preventDefault();
	
	var target = event.target;
	var videoURL = target.href;
	var lessons = document.querySelector('#lessons');
	
	
	var videoId = videoURL.split('v=')[1];
	var ampersandPosition = videoId.indexOf('&');
	if(ampersandPosition != -1) {
		videoId = videoId.substring(0, ampersandPosition);
	}

	
	var content = '';
	content += '<article class="video">';
	content += '<header><h2>' + target.textContent + '</h2></header>';
	content += '<iframe type="text/html" src="https://www.youtube.com/embed/' + videoId + '?controls=1&showinfo=0" allowfullscreen></iframe>';
	content += '</article>';
	
	lessons.insertAdjacentHTML('beforeend', content); 
  
}


// Click on VideoLink (Open)
var videoLinks = document.querySelectorAll('a[href*=youtube]');
for (var i = 0; i < videoLinks.length; i++) {
	videoLinks[i].addEventListener('click', showVideo);
}

// Click on Video (Close)
var video = document.querySelector('.video');
var videoClose = document.querySelectorAll('.video span');

document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'video')) {
    	e.target.parentNode.removeChild(e.target);
    	return false;
    }
}, false);