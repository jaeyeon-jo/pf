$(document).ready(function(){
	
	
	slidingBox('.text1', 750, '#fff', 300);	
	slidingBox('.text2', 500, '#640000', 100);
	slidingBox('.text3', 700, '#640000', 200);	
	
	function slidingBox(item, speed, color, delay){
		$(item).append(
			$('<div class="inner">').css({
				'width':'100%','height':'100%',
				'position':'absolute', 'top':'0px','left':'-200%',
				'background':color
			}).delay(delay).animate({'left':'0%'},speed,'easeOutExpo',function(){
				$(item).css({'color':color})
				$(this).animate({'left':'100%'},speed,'easeInExpo', function(){
					$(this).remove();
				})
			})
		)
	}
	
	
});















