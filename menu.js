$("#page-wrap div.button").click(function(){

	if ($(this).css("opacity") != "1" && $(this).is(":not(animated)")) {
		
		$(this).animate({
			opacity: 1,
			borderWidth: 5
		}, 600 );
		
		var idToLoad = $(this).attr("id").split('-');
		
		$("#content").find("div:visible").fadeOut("fast", function(){
			$(this).parent().find("#"+idToLoad[0]).fadeIn();
		})
	}

	$(this).siblings(".button").animate({
		opacity: 0.5,
		borderWidth: 1
	}, 600 );
	
});
