$(function() {


	// Smooth Scroll to block
	$('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 2000);
        return false; 
   });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var burger = document.querySelector('.burger-container'),
	        header = document.querySelector('.header');
	    
	    burger.onclick = function() {
	        header.classList.toggle('menu-opened');
	    
	};

});

$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();

