var modaalVenObj = (function() {
    var $window = $(window);
    var $modaalVenster = $('<div class="modaal-venster"/>');
    var $modaalInhoud = $('<div class="modaal-inhoud"/>');
    var $sluitknop = $('<span class="sluit-knop">&#10005;</span>');
    
    $modaalVenster.append($modaalInhoud);
    
    return {
        centreren: function() {
            // opdracht centreren
            var links = Math.max($window.width()-$modaalInhoud.outerWidth(), 0) / 2;
            var boven = Math.max($window.height()-$modaalInhoud.outerHeight(), 0) / 2;
            $modaalInhoud.css({left: links, top: boven});
        },
        openen: function(instellingen) {
            $modaalInhoud.append(instellingen.inhoud, $sluitknop);
            $modaalInhoud.css({width: instellingen.breedte+'px' || 'auto',
                               height: instellingen.hoogte+'px' || 'auto'})
            .on('click', function(e) {
                e.stopPropagation();
            });
            $modaalVenster.appendTo('body')
                .on('click', modaalVenObj.sluiten);
            modaalVenObj.centreren();
            $sluitknop.on('click', modaalVenObj.sluiten);
            $window.on('resize', modaalVenObj.centreren);
        },
        sluiten: function() {
            // opdracht sluiten
            $modaalInhoud.empty()
                .off('click', modaalVenObj.sluiten);
            $modaalVenster.detach();
            $window.off('resize', modaalVenObj.centreren);
        }     
    }
}());