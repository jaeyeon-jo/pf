$(document).ready(function(){

	var profil_speed = 1000;
	var profil_btn = $('#con2>.base>.profil>.con2_btn>li');
	var con2_x = $("#con2>.base>.profil>.profilbox>.con2_x");
	var profil = $('#con2>.base>.profil>div');
	var profil_line = $('#con2>.base>.profil>.profil_line');
	
	
	
	

    
	profil_btn.on("click", function(e){
		e.preventDefault();

		var profil_i = $(this).index();
		
		con2_doMotion(profil_i);
	});

	con2_x.on("click", function(e){
		e.preventDefault();

		con2_undoMotion();
	});

	function con2_doMotion(profil_i){
		$(".top").animate({"width" : "100%"}, profil_speed);
		$(".right").animate({"height" : "100%"}, profil_speed);
		$(".bottom").animate({"width" : "100%"}, profil_speed);
		$(".left").animate({"height" : "100%"}, profil_speed, function(){
			profil.eq(profil_i).addClass('on');
		});
		
	}
	
	function con2_undoMotion(profil_i){
		$(".top").animate({"width" : "0%"}, profil_speed);
		$(".right").animate({"height" : "0%"}, profil_speed);
		$(".bottom").animate({"width" : "0%"}, profil_speed);
		$(".left").animate({"height" : "0%"}, profil_speed, function(){
			profil.removeClass('on');
		});
	}


});