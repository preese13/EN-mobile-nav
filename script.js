$(document).ready(function(){
	var isOpen = false;
	var productsOpen = false;
	$('#nav-icon3').click(function(){

		$(this).toggleClass('open');
		$('.nav-info-container').toggleClass('display');
		$('.navbar-mobile').toggleClass('navbar-open');
		window.scrollTo(0, 0);

		
	});

	$('#products-toggle').click(function(){
		
		if(productsOpen) {
			productsOpen = ! productsOpen;
			$('.products-info-container').toggleClass('display');
			setTimeout(function(){ 
				$('.navbar-mobile').toggleClass('navbar-open');
				$('#products-row').toggleClass('products-open');
				$('.mobile-nav-row-2').toggleClass('resize');
			 }, 440);
		}
		else {
			productsOpen = ! productsOpen;
			$('.products-info-container').toggleClass('display');
			$('.navbar-mobile').toggleClass('navbar-open');
			$('#products-row').toggleClass('products-open');
			$('.mobile-nav-row-2').toggleClass('resize');	
		}
	});
});
