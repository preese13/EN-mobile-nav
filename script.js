$(document).ready(function(){
	var isOpen = false;
	var productsOpen = false;
	$('#nav-icon3').click(function(){

		$(this).toggleClass('open');
		$('.nav-info-container').toggleClass('display');
		window.scrollTo(0, 0);

		setTimeout(function(){ 
			$('.navbar-mobile').toggleClass('navbar-open');
		 }, 330);

		
	});

	$('#products-toggle').click(function(){
		
		if(productsOpen) {
			productsOpen = ! productsOpen;
			$('.products-info-container').toggleClass('display');
			setTimeout(function(){ 
				$('#products-row').toggleClass('products-open');
				$('.mobile-nav-row-2').toggleClass('resize');
			 }, 330);
		}
		else {
			productsOpen = ! productsOpen;
			$('.products-info-container').toggleClass('display');
			$('#products-row').toggleClass('products-open');
			$('.mobile-nav-row-2').toggleClass('resize');	
		}
	});
});
