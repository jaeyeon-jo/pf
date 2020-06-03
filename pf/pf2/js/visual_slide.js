$(document).ready(function(){

    
    var visual_img = $("#wrap>#visual>.visualimg>li");

	var button_img = $("#wrap>#visual>.imgNavi>li");

    var current_img = 0;

	timer();

	button_img.on('click', function(){
		var tt_img = $(this);
		var i_img = tt_img.index();

		button_img.removeClass("on");
		tt_img.addClass("on");

		move(i_img);	
    });

    function move(i_img){
		var currentE1_img = visual_img.eq(current_img);
		var nextE1_img = visual_img.eq(i_img);

		currentE1_img.fadeOut(800);
		nextE1_img.fadeIn(800);

		current_img = i_img;
	};



    function timer(){
		setInterval(function(){
			var n = current_img +1;
			if(n==visual_img.size()){n=0}

			button_img.eq(n).trigger("click")

		}, 3000);

	};


 



    


});

