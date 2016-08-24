$(document).ready(function(){
	$("img").click(function(){
		$(this).toggle(2000);
	});

	$("button").click(function(){
		$("img").show();
	})
})