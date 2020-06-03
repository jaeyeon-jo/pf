$(document).ready(function(){



    $("#gnb>li").on("mouseover",  function(){
        $(this).children(".sub").stop().slideDown();
    });

    
   $("#gnb>li").on("mouseleave",  function(){
        $(this).children(".sub").stop().slideUp();
    });



});