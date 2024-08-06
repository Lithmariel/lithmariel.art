$(document).ready(function() {

	// Toggle menu buttons
	$("menu").on('click', '.toggle', function(e) {

		// Menu active class
		$(this).parent("menu").children(".toggle").removeClass("active");
		$(this).addClass("active");
	    e.preventDefault();

	    // Toggle the related content
	    $("content-toggle").addClass("hidden")
	    $((this).href).removeClass("hidden");
	});


});