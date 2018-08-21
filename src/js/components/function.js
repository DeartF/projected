$('.btn-login').click(function() {
	window.scrollTo({
    	top: 0,
    	behavior: "smooth"
	});
	setTimeout(function() {
		$('.modal').css('display' , 'flex');
		$('.modal-form').removeClass('lightSpeedOut');
		$('.modal-form').addClass('lightSpeedIn');
		$('.body').css('overflow' , 'hidden');
	}, 500)
})

function closeModal() {
	$('.modal-form').removeClass('lightSpeedIn');
	$('.modal-form').addClass('lightSpeedOut');

	setTimeout(function() {
		$('.modal-form').removeClass('lightSpeedIn').addClass('lightSpeedOut');
		$('.modal').css('display' , 'none');
		$('.body').css('overflow' , 'auto')
	} , 1200);

}