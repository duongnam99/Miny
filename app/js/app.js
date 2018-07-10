$(function() {
	$('.tohide').slideUp(0);
	var i = 0;
	$('.watch-more1').click(function(event) {
		i ++;
		$('.part1 .tohide').slideToggle(500, "easeOutQuint");
		$('.part1 .to-opc').toggleClass('opc');
		if ( i % 2 == 1) {
			if( $(window).width() >  576) { 
				$('html, body').animate({ 
			        scrollTop: 1300
			    }, 700, "easeOutQuint"); 
			}else {
				$('html, body').animate({ 
			        scrollTop: 1700
			    }, 700, "easeOutQuint"); 
			}
			
		}else {
			if( $(window).width() >  576) { 
				$('html, body').animate({ 
			        scrollTop: 400
			    }, 700, "easeOutQuint"); 
			}else {
				$('html, body').animate({ 
			        scrollTop: 600
			    }, 700, "easeOutQuint"); 
			}
		}
	});
	var j = 0;
	$('.watch-more2').click(function(event) {
		j ++;
		$('.part2 .tohide').slideToggle(500, "easeOutQuint");
		$('.part2 .to-opc').toggleClass('opc');
		if ( j % 2 == 1) {
			if( $(window).width() >  576) { 
				$('html, body').animate({ 
			        scrollTop: 1300 + $('.part1').height()
			    }, 700, "easeOutQuint"); 
			}else {
				$('html, body').animate({ 
			        scrollTop: 1700 + $('.part1').height()
			    }, 700, "easeOutQuint"); 
			}	
		}else {
			if( $(window).width() >  576) { 
				$('html, body').animate({ 
			        scrollTop: 400 + $('.part1').height()
			    }, 700, "easeOutQuint"); 
			}else {
				$('html, body').animate({ 
			        scrollTop: 600 + $('.part1').height()
			    }, 700, "easeOutQuint"); 
			}
		}
	});

	// ipad 
	if($(window).width() < 992 && $(window).width() > 576) {
		$('.navbar-collapse').addClass('collapse');
		$('.navbar-collapse').removeClass('offcanvas-collapse');
		$('.navbar-toggler').attr('data-toggle', 'collapse');;
	}

	// handle navbar 
	var lastScrollTop = 0;
	var h1 = $('.header1').height();
 	var h2 = $('.navbar').height();
 	var h = h1 + h2;
 	function scrollup(position,h) {
 		// handlle scroll up event
 		if (position > lastScrollTop && position > h) {
 			$('.navbar').addClass('d-none');
 			$('.navbar').removeClass('menu-change2');
 		}else if ( position < lastScrollTop && position > h) {
 			$('.navbar').addClass('menu-change2');
 			$('.navbar').removeClass('d-none');
 		}
 		lastScrollTop = position; 
 	}
	$(window).scroll(function(event) {
		var position = $(this).scrollTop(); // tinh vi tri
		if ($(window).width() > 768 ) {
	 		if ( position > h )  {
	 			$('.navbar').addClass('menu-change');
	 			$('.bg-header1, .bg-header2').addClass('bg-margin');
	 		}else if (position < h1) {
	 			$('.navbar').removeClass('menu-change d-none menu-change2');
	 			$('.bg-header1, .bg-header2').removeClass('bg-margin');	
	 		}
	 		scrollup(position,h);
		}else if ($(window).width() <= 768){
			if ( position > 50 )  {
	 			$('.navbar').addClass('menu-change');
	 			$('.bg-header1, .bg-header2').addClass('bg-margin2');
	 			$('.offcanvas-collapse').css('top', '43px');
	 		}else if (position < 50) {
	 			$('.navbar').removeClass('menu-change');
	 			$('.bg-header1, .bg-header2').removeClass('bg-margin2');	
	 			var off = 89 - position;
	 			$('.offcanvas-collapse').css('top', off);
	 		}
	 		// scrollup(position,h);
		}
 	});

 	$('[data-toggle="offcanvas"]').on('click', function () {
	   $('.offcanvas-collapse').toggleClass('open')
	})
	$('#search-input').keypress(function(e) {
	    if(e.keyCode == 13) {
	    	var Title = $('#search-input').val();
			var a = 0;
			for (var i = 0; i < Title.length; i++) {
				if(Title[i] == ' '){
					a += 1;
				}
			}
	 		if(a != Title.length){
	 			window.location.href = "timkiem.html";
	 		}
	    }
	});
})