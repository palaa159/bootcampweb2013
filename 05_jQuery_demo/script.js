$('header').css({
	'transform': 'rotate(-2deg)'
});
var homeworkElem = $('.bigHead');

function initHomework() {
	var originalTextToShowOff = homeworkElem.text();
	var textToShowOff = originalTextToShowOff.split('');
	homeworkElem.html('');
	$.each(textToShowOff, function() {
		homeworkElem.append('<span class="hoverMe">' + this + '</span>');
	});
	$('.hoverMe').hover(function() {
		$(this).css({
			'marginTop': '-10px'
		});
		var randR = Math.floor(Math.random() * 255),
			randG = Math.floor(Math.random() * 255),
			randB = Math.floor(Math.random() * 255),
			bloomerSize = Math.floor(Math.random()* 400) + 200;
		$('.hoverMe:hover').css({
			'color': 'rgba(' + randR + ',' + randG + ',' + randB + ',' + '1)',
			'fontSize': '2.5em',
			'transition': '0.1s'
		});
		$('#bloomer').animate({
			'backgroundColor': 'rgba(' + randR + ',' + randG + ',' + randB + ',' + '1)',
			'top': Math.floor(Math.random()*window.innerHeight),
			'left': Math.floor(Math.random()*window.innerWidth),
			'width': bloomerSize,
			'height': bloomerSize,
			'opacity': 1
		}, 50);
	});
	$('.hoverMe').mouseout(function() {
		$(this).css({
			'color': 'black',
			'fontSize': '1em',
			'transition': '0.5s'
		});
		$('#bloomer').animate({
			'width': 0,
			'height': 0,
			'opacity': 0
		}, 0);
	});
}
$('#activateHW').click(function() {
	initHomework();
});