$(document).ready( function() {
    var batmanInhoud = $('#batman').detach();
    var supermanInhoud = $('#superman').detach();
    var flashInhoud = $('#flash').detach();
    var arrowInhoud = $('#arrow').detach();
    
    $('#batmanThumb').on('click', function(){
        modaalVenObj.openen({inhoud: batmanInhoud, breedte: 600});
    });
    $('#supThumb').on('click', function(){
        modaalVenObj.openen({inhoud: supermanInhoud, breedte: 600});
    });
    $('#flThumb').on('click', function(){
        modaalVenObj.openen({inhoud: flashInhoud, breedte: 600});
    });
    $('#arrowThumb').on('click', function(){
        modaalVenObj.openen({inhoud: arrowInhoud, breedte: 600});
    });
});