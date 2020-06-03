$(document).ready(function(){



    var visual = $("#visual>.img>li");

	var visualNavi = $("#visual>.visualNavi>li");

    var visual_current = 0;

	timer();

	visualNavi.on('click', function(){
		var tt_img = $(this);
		var i_img = tt_img.index();

		visualNavi.removeClass("on");
		tt_img.addClass("on");

		move(i_img);	
    });

    function move(i_img){
		var currentE1_img = visual.eq(visual_current);
		var nextE1_img = visual.eq(i_img);

		currentE1_img.fadeOut(800);
		nextE1_img.fadeIn(800);

		visual_current = i_img;
	};



    function timer(){
		setInterval(function(){
			var n = visual_current +1;
			if(n==visual.size()){n=0}

			visualNavi.eq(n).trigger("click")

		}, 3000);

	};


});