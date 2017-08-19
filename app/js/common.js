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

	$('.js-toggle-menu').click(function(e){
          e.preventDefault();
          $('.mobile-header-nav').slideToggle();
          $(this).toggleClass('open');
    });

});
$('.toggle-block').click(function() {
	if ($('.block').is(':visible')) {
		$('.block').hide('slow');		
	}
	else {
		$('.block').show('slow');		
	}	
});
$('.toggle-block-1').click(function() {
	if ($('.block-1').is(':visible')) {
		$('.block-1').hide('slow');		
	}
	else {
		$('.block-1').show('slow');		
	}	
});
$('.toggle-block-2').click(function() {
	if ($('.block-2').is(':visible')) {
		$('.block-2').hide('slow');		
	}
	else {
		$('.block-2').show('slow');		
	}	
});
$('.toggle-block-3').click(function() {
	if ($('.block-3').is(':visible')) {
		$('.block-3').hide('slow');		
	}
	else {
		$('.block-3').show('slow');		
	}	
});
$('.toggle-block-4').click(function() {
	if ($('.block-4').is(':visible')) {
		$('.block-4').hide('slow');		
	}
	else {
		$('.block-4').show('slow');		
	}	
});
$('.toggle-block-5').click(function() {
	if ($('.block-5').is(':visible')) {
		$('.block-5').hide('slow');		
	}
	else {
		$('.block-5').show('slow');		
	}	
});
$('.toggle-block-6').click(function() {
	if ($('.block-6').is(':visible')) {
		$('.block-6').hide('slow');		
	}
	else {
		$('.block-6').show('slow');		
	}	
});
$('.toggle-block-7').click(function() {
	if ($('.block-7').is(':visible')) {
		$('.block-7').hide('slow');		
	}
	else {
		$('.block-7').show('slow');		
	}	
});
$('.toggle-block-8').click(function() {
	if ($('.block-8').is(':visible')) {
		$('.block-8').hide('slow');		
	}
	else {
		$('.block-8').show('slow');		
	}	
});
$('.toggle-block-9').click(function() {
	if ($('.block-9').is(':visible')) {
		$('.block-9').hide('slow');		
	}
	else {
		$('.block-9').show('slow');		
	}	
});
$(document).ready(function(){
	$('.spoiler_links').click(function () {
		$(this).toggleClass('active');
		return false;
	});
});

$("#modal-form").validate();
$("#modal-form-1").validate();
$(".phone").mask("+7 (999) 999-99-99");
