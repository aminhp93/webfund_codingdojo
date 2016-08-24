$(document).ready(function(){
	// $('#cat0').click(function(){
	// 	var src = $(this).attr('src');
	// 	if (src == 'images/cat0.png'){
	// 		$(this).attr('src', 'images/ninja0.png');
	// 	} else {
	// 		$(this).attr('src', 'images/cat0.png');
	// 	}
	// });
	// $('#cat1').click(function(){
	// 	var src = $(this).attr('src');
	// 	if (src == 'images/cat1.png'){
	// 		$(this).attr('src', 'images/ninja1.png');
	// 	} else {
	// 		$(this).attr('src', 'images/cat1.png');
	// 	}
	// });
	// $('#cat2').click(function(){
	// 	var src = $(this).attr('src');
	// 	if (src == 'images/cat2.png'){
	// 		$(this).attr('src', 'images/ninja2.png');
	// 	} else {
	// 		$(this).attr('src', 'images/cat2.png');
	// 	}
	// });
	// $('#cat3').click(function(){
	// 	var src = $(this).attr('src');
	// 	if (src == 'images/cat3.png'){
	// 		$(this).attr('src', 'images/ninja3.png');
	// 	} else {
	// 		$(this).attr('src', 'images/cat3.png');
	// 	}
	// });
	// $('#cat4').click(function(){
	// 	var src = $(this).attr('src');
	// 	if (src == 'images/cat4.png'){
	// 		$(this).attr('src', 'images/ninja4.png');
	// 	} else {
	// 		$(this).attr('src', 'images/cat4.png');
	// 	}
	// });
	$("#container img").click(function(){
		var temp = $(this).attr('src');
		$(this).attr('src', $(this).attr('data-alt-src'));
		$(this).attr('data-alt-src', temp);
	});
});