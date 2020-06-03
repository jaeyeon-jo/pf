$(document).ready(function(){


    $(window).resize(function(){
        var width_size = window.outerWidth;

        if(width_size>=577){
            $('#moPanel').css({'display':'none'})
        }
        else{
            $('#moPanel').css({'display':'block'})
        }
    });

    $('.btnMo').on('click',function(){
        var isOpen = $('#moPanel').hasClass('on')

        if(isOpen){
            $('#moPanel').removeClass('on')
        }
        else{
            $('#moPanel').addClass('on')
        }
    });

    var $moGnb_li = $('#moGnb>li');

    $moGnb_li.on('click', function(e){
        e.preventDefault();

        var isOn = $(this).children('a').hasClass('on');

        if(isOn){
            $(this).children('a').removeClass('on');
            $(this).children('.sub').stop().slideUp();
        }
        else{
            $moGnb_li.children('a').removeClass('on');
            $moGnb_li.children('.sub').stop().slideUp();
            $(this).children('a').addClass('on');
            $(this).children('.sub').stop().slideDown();
        }
    });

    
    
});