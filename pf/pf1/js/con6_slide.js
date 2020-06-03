$(document).ready(function(){	

    var prev = $('#contents>.con6>.prev');
    var next = $('#contents>.con6>.next');

    $(next).on('click', function(e){
		e.preventDefault();

		$('.con6_img').stop().animate({'margin-left':'-50%'},500,function(){
			$('.con6_img>li').first().appendTo('.con6_img');
			$('.con6_img').css({'margin-left':'-25%'});
		});
	});
	$(prev).on('click', function(e){
		e.preventDefault();

		$('.con6_img').stop().animate({'margin-left':'0px'},500,function(){
			$('.con6_img>li').last().prependTo('.con6_img');
			$('.con6_img').css({'margin-left':'-25%'});
		});
    });
});