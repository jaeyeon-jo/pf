$(document).ready(function(){	

    var con3_prev = $('#contents>.con3>.con3_btn>.prev');
	var con3_next = $('#contents>.con3>.con3_btn>.next');

    $(con3_next).on('click', function(e){
		e.preventDefault();

		$('.con3_img').stop().animate({'margin-left':'-200%'},500,function(){
			$('.con3_img>li').first().appendTo('.con3_img');
			$('.con3_img').css({'margin-left':'-100%'});
		});
	});

	$(con3_prev).on('click', function(e){
		e.preventDefault();

		$('.con3_img').stop().animate({'margin-left':'0%'},500,function(){
			$('.con3_img>li').last().prependTo('.con3_img');
			$('.con3_img').css({'margin-left':'-100%'});
		});
    });
});