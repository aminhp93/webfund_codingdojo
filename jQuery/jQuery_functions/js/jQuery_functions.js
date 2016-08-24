$(document).ready(function(){
	// .click
	$("#click p").click(function(){
		$(this).slideUp();
	})

	$("#target-1").click(function(){
		alert("Handler for .click() called.");
	})

	// .focus
	$("#target-2").focus(function(){
		alert("Handle for .focus() called");
	})

	$("#other-2").click(function(){
		$("#target-2").focus();
	})

	$("#focus input").focus(function(){
		$(this).next("span").css("display", "inline").fadeOut(1000);
	})

	// .addClass
	$("#addClass div p").last().addClass("selected");
	$("#addClass p:first").addClass("selected highlight");

	$("#addClass div").addClass(function(index, currentClass){
		var addedClass;
		if (currentClass === "red"){
			addedClass = "green";
			$("#addClass p").text("There is one green div");
		}
		return addedClass;
	})

	// .val
	function dispalyVals(){
		var singleValues = $("#single").val();
		var multipleValues = $("#multiple").val();
		$("#val p").html("<b>Single:</b> " + singleValues + 
						"<b>Multiple:</b> " + multipleValues.join(", ") );
	}
	$("#val select").change(dispalyVals);
	dispalyVals();

	$("#val input")
		.keyup(function(){
			var value = $(this).val();
			$("#other-3").text(value);
		})
		.keyup();

	$("#val button").click(function(){
		var text = $(this).text();
		$("#val input").val(text);
	})

	// .text
	var str = $("#text p:first").text();
	$("#text p:last").html(str);

	// .attr
	$("#attr input")
		.change(function(){
			var $amin = $(this);
			$("#attr p").html(".attr('checked'): <b>" + $amin.attr("checked") + "</b><br>" +
							  ".prop('checked'): <b>" + $amin.prop("checked") + "</b><br>" +
							  ".is(':checked'): <b>" + 	$amin.is(":checked")  + "</b>");
		})
		.change();

	// .html
	$("#html p").click(function(){
		var htmlString = $(this).html();
		$(this).text(htmlString);
	})

	// .data
	$("#data button").click(function(){
		var value;

		switch ($("#data button").index(this)){
			case 0:
				value = $("#data div").data("blah");
				break;
			case 1:
				$("#data div").data("blah", "hello");
				value = "Stored";
				break;
			case 2:
				$("#data div").data("blah", 86);
				value = "Stored";
				break;
			case 3:
				$("#data div").removeData("blah");
				value = "Remove";
				break;
		}
		$("#data span").text("" + value);
	})

	// .before
	$("#before p").before("<b>Hello</b>");

	// .after
	$("#after h2").after("<h1>IS NOT</h1>");

	// .append
	$("#append .inner").append("<p>Test</p>");
	$("#append .container").append($("#append h2"));

	// .show
	$("#show button").click(function(){
		$("#show p").show("normal");
	})

	// .hide
	$("#hide h3").click(function(){
		$("#hide h3").hide(2000);
	})

	// .toggle
	$("#toggle div").click(function(){
		$("#toggle p").toggle(5000);
	})

	// .fadeIn
	$("#fadeIn div").click(function(){
		$("#fadeIn p").fadeIn(3000);
	})

	// .fadeOut
	$("#fadeOut div").click(function(){
		$("#fadeOut p").fadeOut(3000);
	})

	// .slideDown
	$("#slideDown div").click(function(){
		$("#slideDown p").slideDown(3000);
	})

	// .slideUp
	$("#slideUp div").click(function(){
		$("#slideUp p").slideUp(3000);
	})

	// .slideToggle
	$("#slideToggle div").click(function(){
		$("#slideToggle p").slideToggle(3000);
	})
})


