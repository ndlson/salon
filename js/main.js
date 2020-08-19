(function($) {
	"use strict";
	$(document).ready(function() {
		$('.banner').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    navText: ['<i class="icofont-hand-drawn-alt-left"></i>', '<i class="icofont-hand-drawn-alt-right"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
		$('.img_slider').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    navText: ['<i class="icofont-hand-drawn-alt-left"></i>', '<i class="icofont-hand-drawn-alt-right"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
	});

})(jQuery);