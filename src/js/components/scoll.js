 $(window).scroll(function() {
	$('.mov').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 850) {
			$(this).addClass('wobble');
		}
	})
})

$(window).scroll(function() {
	$('.mov2').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 950) {
			$(this).addClass('fadeInLeft');
		}
	})
})

$(window).scroll(function() {
	$('.mov3').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 970) {
			$(this).addClass('fadeInRight');
		}
	})
})

$(window).scroll(function() {
	$('.mov4').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 920) {
			$(this).addClass('rollIn');
		}
	})
})

$(window).scroll(function() {
	$('.img-latest').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 920) {
			$(this).addClass('zoomInUp');
		}
	})
})

