/**
 * Created by andre on 08/12/2016.
 * Funció per ampliar les fotografies
 */

$(document).ready(function(){
    $('.img-rounded').click(function(e){
        var img = e.target.src; //Guardar en img la imatge seleccionada
        var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';

        $('body').append(modal);
        $('#modal__boton').click(function(){
            $('#modal').remove();
        })
    });

    $(document).keyup(function(e){ //Click en 'ESC' i tanquem imatge també
        if (e.which==27) {
            $('#modal').remove();
        }
    });
});