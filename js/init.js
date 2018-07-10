jQuery(document).ready(function($){
	$(gestures.container).on('swipeleft', function() {
		var post_nav = jQuery('.wp-post-navigation-next a');
		if ( post_nav ) {
			jQuery(location).attr('href', post_nav.attr('href'));
		}		
	}).on('swiperight', function() {
		var post_nav = jQuery('.wp-post-navigation-pre a');
		if ( post_nav ) {
			jQuery(location).attr('href', post_nav.attr('href'));
		}		
	});
});
