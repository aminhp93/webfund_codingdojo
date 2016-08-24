
$(document).ready(function(){
	

	// create a new form for tag contact
	$('#button').on('click', (function(){
		var firstName = $('#first_name').val();
		var lastName = $('#last_name').val();
		var description = $('#description').val();
		$('.right_content').append('<div class="contact"><div class="top"><h3>' + firstName + " " + lastName + '</h3><h4>Click here for description</h4></div><div class="description" style="display: none">' + description + '</div></div');
		$('#firstName', '#lastName', '#description').val("");
	}))

	// change the content of new tag contact
	$(document).on('click', '.contact', function(){
		$(this).children().toggle();
	})
})
