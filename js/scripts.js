

var nice = $("html").niceScroll();  // The document page (body)
	
			$("#body").html($("#body").html()+' '+nice.version);



 		
	   
$(document).ready(function(){
	$('#navbar').localScroll(20);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	
	$('.header-bg').parallax("80%", 0.1);
	$('.parallax1').parallax("50%", 0.1);
	$('.parallax2').parallax("50%", 0.1);	
	$('.parallax3').parallax("50%", 0.1);		
		

});



 jQuery(document).ready(function($) {
 
 	$( "#small-nav" ).hover(function() {

    $( ".responsive-menu" ).toggle( "blind", 800 );

});


$(document).ready(function() {
$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(290,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="images/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val(),
			verify: $('#verify').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});

	});			
				

var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('.top-menu').addClass("top-menu-b");
                } else {
                    _rys('.top-menu').removeClass("top-menu-b");
                }
            });
        });
		
		 var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('.bottom-menu').addClass("bottom-menu-b");
                } else {
                    _rys('.bottom-menu').removeClass("bottom-menu-b");
                }
            });
        });
		
		 var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('.center-line').addClass("center-line-b");
                } else {
                    _rys('.center-line').removeClass("center-line-b");
                }
            });
        });
		
		 var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('.logo').addClass("logo-b");
                } else {
                    _rys('.logo').removeClass("logo-b");
                }
            });
        });
		
		var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('.logo').addClass("logo-b");
                } else {
                    _rys('.logo').removeClass("logo-b");
                }
            });
        });
			
		
		var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('.header-line').addClass("header-line-b");
                } else {
                    _rys('.header-line').removeClass("header-line-b");
                }
            });
        });			

		
			var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('.header-line-center').addClass("header-line-center-b");
                } else {
                    _rys('.header-line-center').removeClass("header-line-center-b");
                }
            });
        });
		
		var _rys = jQuery.noConflict();
        _rys("document").ready(function () {
            _rys(window).scroll(function () {
                if (_rys(this).scrollTop() > 136) {
					
                    _rys('header').addClass("header-b");
                } else {
                    _rys('header').removeClass("header-b");
                }
            });
        });					

			
			
        });
	
	

		

(function($){
		$(document).ready(function() {
			var image_array = new Array();
			image_array = [
				{image: 'images/our_team/1.jpg'},
					// image for the first layer, goes with the text from id="sw0"
				{image: 'images/our_team/2.jpg'},
					// image for the second layer, goes with the text from id="sw1"
				{image: 'images/our_team/3.jpg'},
					// image for the third layer, goes with the text from id="sw2"
				{image: 'images/our_team/4.jpg'},
					// ...
				{image: 'images/our_team/5.jpg'},

				{image: 'images/our_team/7.jpg'}
			];
			$('#slider1').content_slider({		// bind plugin to div id="slider1"
				map : image_array,				// pointer to the image map
				max_shown_items: 5,				// number of visible circles
				hv_switch: 0,					// 0 = horizontal slider, 1 = vertical
				active_item: 0,					// layer that will be shown at start, 0=first, 1=second...
				wrapper_text_max_height: 450,	// height of widget, displayed in pixels
				middle_click: 1,				// when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
				under_600_max_height: 1200,		// if resolution is below 600 px, set max height of content
				border_radius:	-1,				// -1 = circle, 0 and other = radius
				automatic_height_resize: 1,
				activate_border_div:1,
				small_border:-1,
				allow_shadow: 0,
				border_color: '#fff',
				arrow_color: '#fff',
				border_on_off:1,
				hover_speed:100,
				auto_play_pause_time:7000,
				auto_play:0,
			});
			$("a[rel^='prettyPhoto']").prettyPhoto();
		});
	})(jQuery);
	
	
	
	(function($){
		$(document).ready(function() {
			var image_array = new Array();
			image_array = [
				{image: 'images/portfolio/1.jpg'},
					// image for the first layer, goes with the text from id="sw0"
				{image: 'images/portfolio/2.jpg'},
					// image for the second layer, goes with the text from id="sw1"
				{image: 'images/portfolio/3.jpg'},
					// image for the third layer, goes with the text from id="sw2"
				{image: 'images/portfolio/4.jpg'},
					// ...
				{image: 'images/portfolio/5.jpg'},
				{image: 'images/portfolio/6.jpg'},
				{image: 'images/portfolio/7.jpg'}
			];
			$('#slider2').content_slider({		// bind plugin to div id="slider1"
				map : image_array,				// pointer to the image map
				max_shown_items: 7,				// number of visible circles
				hv_switch: 0,					// 0 = horizontal slider, 1 = vertical
				active_item: 0,					// layer that will be shown at start, 0=first, 1=second...
				wrapper_text_max_height: 810,	// height of widget, displayed in pixels
				middle_click: 1,				// when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
				under_600_max_height: 1200,		// if resolution is below 600 px, set max height of content
				border_radius:	-1,
				border_on_off:1,	
				small_border:-1,	
				allow_shadow: 0,	
				bind_arrow_keys:0,
				mode:1,	
				enable_mousewheel:0,
				border_color:'#111625',
				arrow_color:'#111625',
			});
			$("a[rel^='prettyPhoto']").prettyPhoto();
		});
	})(jQuery);
   
   
