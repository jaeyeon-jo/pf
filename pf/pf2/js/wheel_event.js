$(document).ready(function () {

	var speed = 1000;
	var ease = 'easeOutExpo';
	var $wrap_div = $('#wrap>div');
	var wrap_navi = $('#wrapNavi>li');
	var wrap_gnb = $('#gnb>li');
	var logo = $('#logo');



	match_height();
	$(window).on('resize', match_height);

	function match_height() {
		var ht = $(window).height();
		$wrap_div.height(ht);
	};

	$wrap_div.on("mousewheel", function (event, delta) {
		event.preventDefault();

		//마우스 휠을 올렸을때	
		if (delta > 0) {
			console.log('up');
			var prev_target = $(this).prev().offset().top;
			$('html,body').stop().animate({
				'scrollTop': prev_target
			}, speed, ease);


			//마우스 휠을 내렸을때	 
		} else if (delta < 0) {
			console.log('down');
			var next_target = $(this).next().offset().top;
			$('html,body').stop().animate({
				'scrollTop': next_target
			}, speed, ease);

		}
	});

	wrap_navi.children('a').on('click', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var target_pos = $(target).offset().top;

		$('html,body').stop().animate({
			'scrollTop': target_pos
		}, 1000);
	});

	wrap_gnb.children('a').on('click', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var target_pos = $(target).offset().top;

		$('html,body').stop().animate({
			'scrollTop': target_pos
		}, 1000);
	});

	logo.children('a').on('click', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var target_pos = $(target).offset().top;

		$('html,body').stop().animate({
			'scrollTop': target_pos
		}, 1000);
	});

	$(window).on('scroll', function () {
		var scroll = $(this).scrollTop();
		var pos1 = $('#wrap>#visual').offset().top;
		var pos2 = $('#wrap>#con1').offset().top;
		var pos3 = $('#wrap>#con2').offset().top;
		var pos4 = $('#wrap>#con3').offset().top;

		wrap_navi.removeClass('on');

		if (scroll == pos1) {
			wrap_navi.eq(0).addClass('on');
		}
		if (scroll == pos2) {
			wrap_navi.eq(1).addClass('on');
		}
		if (scroll == pos3) {
			wrap_navi.eq(2).addClass('on');
		}
		if (scroll == pos4) {
			wrap_navi.eq(3).addClass('on');
		}
	});


});