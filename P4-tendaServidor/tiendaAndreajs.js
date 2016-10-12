/**
 * Created by boyander on 11/10/16.
 */
$(document).ready(function(){
	
    $('.imagen').mouseenter(function() {
        $(this).animate({opacity: '0.5'});		
        $(this).parent().addClass("selected");
    });
    $('.imagen').mouseout(function() {
        $(this).animate({opacity:'100'});
        $(this).parent().removeClass("selected");
    });
		
});

