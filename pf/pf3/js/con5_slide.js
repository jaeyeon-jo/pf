$(document).ready(function(){	

    var con5_prev = $('#contents>.con5>.con5_btn>.prev');
	var con5_next = $('#contents>.con5>.con5_btn>.next');

    $(con5_next).on('click', function(e){
		e.preventDefault();

		$('.con5_img').stop().animate({'margin-left':'-50%'},500,function(){
			$('.con5_img>li').first().appendTo('.con5_img');
			$('.con5_img').css({'margin-left':'-25%'});
		});
	});

	$(con5_prev).on('click', function(e){
		e.preventDefault();

		$('.con5_img').stop().animate({'margin-left':'0%'},500,function(){
			$('.con5_img>li').last().prependTo('.con5_img');
			$('.con5_img').css({'margin-left':'-25%'});
		});
    });
});