$(document).ready(function(){
	var isOpen = false;
	var productsOpen = false;
	$('#nav-icon3').click(function(){

		$(this).toggleClass('open');
		$('.nav-info-container').toggleClass('display');
		window.scrollTo(0, 0);

		if(isOpen) {
			setTimeout(function(){ 
				console.log(1)
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
			productsOpen = ! productsOpen;
			$('.products-info-container').toggleClass('display');
			setTimeout(function(){ 
				$('#products-row').toggleClass('products-open');
				$('.mobile-nav-row-2').toggleClass('resize');
			 }, 350);
		}
		else {
			productsOpen = ! productsOpen;
			$('.products-info-container').toggleClass('display');
			$('#products-row').toggleClass('products-open');
			$('.mobile-nav-row-2').toggleClass('resize');	
		}
	});
});
