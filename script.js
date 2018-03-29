$(document).ready(function(){

	$('#nav-icon3').click(function(){

		$(this).toggleClass('open');
		$('.nav-info-container').toggleClass('display');
		$('.navbar-mobile').toggleClass('navbar-open');
		window.scrollTo(0, 0);
		
	});
	$('#products').click(function(){
		console.log(1)
		$('.products-table').toggleClass('display-products');
	});
});
