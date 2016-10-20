$(document).ready(function(){
    $('.img-rounded').mouseenter(function() {
        $(this).animate({opacity: '0.5'});
        $(this).parent().addClass("selected");
    });
    $('.img-rounded').mouseout(function() {
        $(this).animate({opacity:'100'});
        $(this).parent().removeClass("selected");
    });
});