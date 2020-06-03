$(document).ready(function(){

    var con2_btn = $('#contents>.con2>.tab>#tab>.btns>li')
    var con2_panel1 = $('#contents>.con2>.tab>.panel1>li')
    var con2_panel2 = $('#contents>.con2>.tab>#tab>.panel2>li')


    $(con2_btn).on('click',function(e){
        e.preventDefault();

        $(con2_btn).removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();
		tab(i);

    });

    function tab(index){

        $(con2_panel1).removeClass('on');
        $(con2_panel1).eq(index).addClass('on');

        $(con2_panel2).removeClass('on');
        $(con2_panel2).eq(index).addClass('on');
    }
    
	


});