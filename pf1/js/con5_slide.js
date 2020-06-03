$(document).ready(function(){

    
    var con5_slideImg = $("#contents>.con5>.img>.imgbg>li");

	var con5_button = $("#contents>.con5>.img>.gnbimg>li");

    var con5_current = 0;

	timer();

	con5_button.on('click', function(e){
        e.preventDefault();
        
		var con5_tt = $(this);
		var con5_i = con5_tt.index();

		con5_button.removeClass("on");
		con5_tt.addClass("on");

		move(con5_i);	
    });

    function move(con5_i){
		var con5_currentE1 = con5_slideImg.eq(con5_current);
		var con5_nextE1 = con5_slideImg.eq(con5_i);

		con5_currentE1.fadeOut(800);
		con5_nextE1.fadeIn(800);

		con5_current = con5_i;
	};



    function timer(){
		setInterval(function(){
			var n = con5_current +1;
			if(n==con5_slideImg.size()){n=0}

			con5_button.eq(n).trigger("click")

		}, 3000);

	};


 



    


});
