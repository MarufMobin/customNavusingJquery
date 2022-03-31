/* global wp, jQuery */
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					clip: 'rect(1px, 1px, 1px, 1px)',
					position: 'absolute',
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					clip: 'auto',
					position: 'relative',
				} );
				$( '.site-title a, .site-description' ).css( {
					color: to,
				} );
			}
		} );
	} );
		alert('hellow WOrld')
	$(document).ready(function(){
		$('#nav-icon').click(function(){
			$(this).toggleClass('open');
	    $(".overlay").toggleClass("open");
	    $(".overlay a").toggleClass("open");
	  $(".overlay p").toggleClass("open");
		});
	  
	  // Scroll Reveal
	  // ScrollReveal().reveal('.services .grid .card');
	  
	  $('.square.blue').on('inview', function(event, isInView) {
	    if (isInView) {
	      // element is now visible in the viewport
	      $(this).addClass("in-view");
	    } else {
	      // element has gone out of viewport
	      $(this).removeClass("in-view");
	    }
	  });
	});
	 

}( jQuery ) );
