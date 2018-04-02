$(document).ready(function(){
	var isOpen = false;
	var productsOpen = false;
	$('#nav-icon3').click(function(){

		$(this).toggleClass('open');
		$('.nav-info-container').toggleClass('display');
		window.scrollTo(0, 0);

		if(isOpen) {
			setTimeout(function(){ 
				$('.navbar-mobile').toggleClass('navbar-open');
			 }, 500);
		}
		else {
			$('.navbar-mobile').toggleClass('navbar-open');
		}
		isOpen = !isOpen;
	});

	$('#products-toggle').click(function(){
		
		if(productsOpen) {
			$('.products-info-container').toggleClass('display');
			setTimeout(function(){ 
				$('#products-row').toggleClass('products-open');
				$('.mobile-nav-row-2').toggleClass('display-none');
				$('.mobile-nav-row').toggleClass('resize');
				$('.mobile-nav-row-end').toggleClass('resize');
				$('#products-arrow').toggleClass('rotated');
				
			 }, 400);
		}
		else {
			$('.products-info-container').toggleClass('display');
			$('#products-row').toggleClass('products-open');
			$('.mobile-nav-row-2').toggleClass('display-none');	
			$('.mobile-nav-row').toggleClass('resize');
			$('.mobile-nav-row-end').toggleClass('resize');
			$('#products-arrow').toggleClass('rotated');

		}

		productsOpen = ! productsOpen;
	});
});
