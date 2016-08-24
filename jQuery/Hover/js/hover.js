$(document).ready(function(){
	// var sourceSwap = function () {
	//     var $this = $(this);
	//     var newSource = $this.attr('data-alt-src');
	//     $this.attr('data-alt-src', $this.attr('src'));
	//     $this.attr('src', newSource);
	// };

	// $('img').hover(sourceSwap, sourceSwap);
	$('#container img').hover(function(){
		var temp = $(this).attr('src');
		$(this).attr('src', $(this).attr('data-alt-src'));
		$(this).attr('data-alt-src', temp);
	})
});
