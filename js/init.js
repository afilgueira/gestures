		
jQuery(document).ready(function($){
	$(gestures.container).on('swipeleft', function() {
		var post_nav = "<?php next_post_link(); ?>";
		if ( post_nav ) {
			jQuery(location).attr('href', post_nav.attr('href'));
		}		
	}).on('swiperight', function() {
		var post_nav = "<?php previous_post_link(); ?>";
		if ( post_nav ) {
			jQuery(location).attr('href', post_nav.attr('href'));
		}		
	});
});
