$(function() {
	
	$(".equipment-loader").delay(500).stop().animate({                 
		left: "-=471px"
	}, 5000);

	$('.equipment-container').delay(500).stop()
	.animate({
		left:'-=469px'
	}, 5000)
	.animate({
		top:'+=70px'
	}, 3000);


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

	$('.toggle-block').on("mouseout", function(e) {
		if ($('.block').is(':visible')) {
			$('.block').hide('slow');		
		}
		else {
			$('.block').show('slow');		
		}	
	});
	$(".toggle-block").on("mouseover", function(e){
		$('.block').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block").on("mouseout", function(e){
		$('.block').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-1').on("mouseout", function(e) {
		if ($('.block-1').is(':visible')) {
			$('.block-1').hide('slow');		
		}
		else {
			$('.block-1').show('slow');		
		}	
	});
	$(".toggle-block-1").on("mouseover", function(e){
		$('.block-1').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-1").on("mouseout", function(e){
		$('.block-1').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-2').on("mouseout", function(e) {
		if ($('.block-2').is(':visible')) {
			$('.block-2').hide('slow');		
		}
		else {
			$('.block-2').show('slow');		
		}	
	});
	$(".toggle-block-2").on("mouseover", function(e){
		$('.block-2').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-2").on("mouseout", function(e){
		$('.block-2').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-3').on("mouseout", function(e) {
		if ($('.block-3').is(':visible')) {
			$('.block-3').hide('slow');		
		}
		else {
			$('.block-3').show('slow');		
		}	
	});
	$(".toggle-block-3").on("mouseover", function(e){
		$('.block-3').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-3").on("mouseout", function(e){
		$('.block-3').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-4').on("mouseout", function(e) {
		if ($('.block-4').is(':visible')) {
			$('.block-4').hide('slow');		
		}
		else {
			$('.block-4').show('slow');		
		}	
	});
	$(".toggle-block-4").on("mouseover", function(e){
		$('.block-4').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-4").on("mouseout", function(e){
		$('.block-4').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-5').on("mouseout", function(e) {
		if ($('.block-5').is(':visible')) {
			$('.block-5').hide('slow');		
		}
		else {
			$('.block-5').show('slow');		
		}	
	});
	$(".toggle-block-5").on("mouseover", function(e){
		$('.block-5').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-5").on("mouseout", function(e){
		$('.block-5').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-6').on("mouseout", function(e) {
		if ($('.block-6').is(':visible')) {
			$('.block-6').hide('slow');		
		}
		else {
			$('.block-6').show('slow');		
		}	
	});
	$(".toggle-block-6").on("mouseover", function(e){
		$('.block-6').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-6").on("mouseout", function(e){
		$('.block-6').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-7').on("mouseout", function(e) {
		if ($('.block-7').is(':visible')) {
			$('.block-7').hide('slow');		
		}
		else {
			$('.block-7').show('slow');		
		}	
	});
	$(".toggle-block-7").on("mouseover", function(e){
		$('.block-7').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-7").on("mouseout", function(e){
		$('.block-7').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-8').on("mouseout", function(e) {
		if ($('.block-8').is(':visible')) {
			$('.block-8').hide('slow');		
		}
		else {
			$('.block-8').show('slow');		
		}	
	});
	$(".toggle-block-8").on("mouseover", function(e){
		$('.block-8').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-8").on("mouseout", function(e){
		$('.block-8').animate({               
			opacity: 0
		},2000);
	});
	$('.toggle-block-9').on("mouseover", function(e) {	
		if ($('.block-9').is(':visible')) {
			$('.block-9').hide('slow');
		}
		else {
			$('.block-9').show('slow');		
		}	
	});
	$(".toggle-block-9").on("mouseover", function(e){
		$('.block-9').animate({
			opacity: 1 
		},100);
	});
	// Убрали курсор
	$(".toggle-block-9").on("mouseout", function(e){
		$('.block-9').animate({               
			opacity: 0
		},2000);
	});

	$(document).ready(function(){
		$('.spoiler_links').click(function () {
			$(this).toggleClass('active');
			return false;
		});
	});

});


$("#modal-form").validate();
$("#modal-form-1").validate();
$(".phone").mask("+7 (999) 999-99-99");



var scrolled = false;

$(window).scroll(function(){
    if (!scrolled) {
        var st = $(this).scrollTop();
        console.log(st);
        if(st >= 1000 && st<=1100){
            scrolled = true;
            $(".equipment-loader1").delay(500).stop().animate({                 
			left: "-=471px"
		}, 5000);

		$('.equipment-container1').delay(500).stop()
		.animate({
			left:'-=469px'
		}, 5000)
		.animate({
			top:'+=70px'
		}, 3000);
        }
    }
});