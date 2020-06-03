$(document).ready(function(){	

    var con1_prev = $('#contents>.con1>.event>.prev');
	var con1_next = $('#contents>.con1>.event>.next');

    $(con1_next).on('click', function(e){
		e.preventDefault();

		$('.event_img').stop().animate({'margin-left':'-200%'},500,function(){
			$('.event_img>li').first().appendTo('.event_img');
			$('.event_img').css({'margin-left':'-100%'});
		});
	});

	$(con1_prev).on('click', function(e){
		e.preventDefault();

		$('.event_img').stop().animate({'margin-left':'0%'},500,function(){
			$('.event_img>li').last().prependTo('.event_img');
			$('.event_img').css({'margin-left':'-100%'});
		});
    });
});