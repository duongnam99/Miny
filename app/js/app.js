$(function() {
	$('.tohide').slideUp(0);
	var i = 0;
	$('.watch-more1').click(function(event) {
		i ++;
		$('.part1 .tohide').slideToggle(400);
		$('.part1 .to-opc').toggleClass('opc');
		if ( i % 2 == 1) {
			$('html, body').animate({ 
		        scrollTop: $('.part1').height() + $('.part1').offset().top - 300
		    }, 400); 
		}else {
			$('html, body').animate({ 
		        scrollTop: $('.part1').height() + $('.part1').offset().top - 1300
		    }, 400); 
		}
	});
	var j = 0;
	$('.watch-more2').click(function(event) {
		j ++;
		$('.part2 .tohide').slideToggle(400);
		$('.part2 .to-opc').toggleClass('opc');
		if ( j % 2 == 1) {
			$('html, body').animate({ 
		        scrollTop: $('.part2').height() + $('.part2').offset().top - 300
		    }, 400); 
		}else {
			$('html, body').animate({ 
		        scrollTop: $('.part2').height() + $('.part2').offset().top - 1300
		    }, 400); 
		}
	});
})