$(document).ready(function(){	

    var con2_prev = $('#contents>.con2>.con2_btn>.prev');
	var con2_next = $('#contents>.con2>.con2_btn>.next');

    $(con2_prev).on('click', function(e){
		e.preventDefault();

		$('.con2_img').stop().animate({'margin-top':'-940px'},500,function(){
			$('.con2_img>li').first().appendTo('.con2_img');
			$('.con2_img').css({'margin-top':'-470px'});
		});
	});

	$(con2_next).on('click', function(e){
		e.preventDefault();

		$('.con2_img').stop().animate({'margin-top':'0'},500,function(){
			$('.con2_img>li').last().prependTo('.con2_img');
			$('.con2_img').css({'margin-top':'-470px'});
		});
    });
});