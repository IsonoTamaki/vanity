(function($) {
	var $nav   = $('#navArea');
	var $btn   = $('.toggle_btn');
	var $mask  = $('#mask');
	var $concept = $('#concept-button');
	var $news = $('#news-button');
	var $product = $('#product-button');
	var open   = 'open';
	$btn.on( 'click', function() {
	  if ( ! $nav.hasClass( open ) ) {
		$nav.addClass( open );
	  } else {
		$nav.removeClass( open );
	  }
	});
	$mask.on('click', function() {
		$nav.removeClass( open );
	});
	$concept.on('click', function() {
		$nav.removeClass( open );
	});
	$news.on('click', function() {
		$nav.removeClass( open );
	});
	$product.on('click', function() {
		$nav.removeClass( open );
	});
  } )(jQuery);
