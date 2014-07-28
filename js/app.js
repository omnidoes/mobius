

( function($) {

	var BREAKPOINTS = {
		lap:         481,
		desk:        770,
		deskwide: 	 1140
	};

	var App = new( function() {

		var _root = this;

		this.init = function() {

			_root.bindUI();
			_SVGreplacer();
		}

		this.bindUI = function() {

			window.addEventListener('load', function() {

				/* Initialize FastClick */
			    FastClick.attach(document.body);

			}, false);

			/* 
			 * Smooth Scrolling
			 * http://css-tricks.com/snippets/jquery/smooth-scrolling/
			 */

			$('a[href*=#]:not([href=#])').on('click', function() {				
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top
					}, 1000);
					return false;
					}
			    }
			});
		}

		/* 
		 * Adds the page's logo, with either a raster or vector src, based on Modernizr tests.
		 */
		var _SVGreplacer = function() {

			var logo = $('#sitelogo img');
			var logoSRC = logo.data('src');

			if( Modernizr.svg == true ) {
				logoSRC = logo.data('svg-src');
			}

			logo.attr({
				src: logoSRC
			});
		}

	});

	App.init();

})(jQuery);