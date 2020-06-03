$(document).ready(function(){



    var visual = $("#visual>.img>li");

	var button = $("#visual>.visualnavi>li");

    var current = 0;

	timer();

	button.on('click', function(){
		var tt = $(this);
		var i = tt.index();

		button.removeClass("on");
		tt.addClass("on");

		move(i);	
    });


	function move(i){
		var currentE1 = visual.eq(current);
		var nextE1 = visual.eq(i);

		currentE1.css({"left" : 0}).animate({"left" : "-100%"});
		nextE1.css("left" , "100%").animate({"left" : 0});

		current = i;
	};

	function timer(){
		setInterval(function(){
			var n = current +1;
			if(n==visual.size()){n=0}

			button.eq(n).trigger("click")

		}, 3000);

    };


});