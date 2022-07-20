$(document).ready(function(){
    var $moveable = $('.move-rect');
    var rectPosY = parseInt($('.move-rect').css('top'), 10);
    var rectPosX = parseInt($('.move-rect').css('right'), 10);
    $(".main").mousemove(function(e){
        $moveable.css({'top': rectPosY-e.pageY/40,'right': rectPosX-e.pageX/40});
    });
});