function initUI(){
    showAllCards();
    showCard($('.card').first());

    $('.clickable-table-row').click(function(event){
        var parentCard = $(this).closest('.card');
        if (isMaxSize(parentCard)) {
            console.log('Parent card is max size');
            toggleRow(this);
            $('.editable-container', this).each(function(index){
                $('.form-control', this).val($('.variable_value', this).text());
            })

            if ($('.clickable-table-row .variable-form:visible').length > 0){
                pauseMonitoring();
            }
            else {
                startMonitoring();
            }
            event.stopPropagation();
        }
    });

    $('input').click(function(event){
        event.stopPropagation();
    });
}


function toggleSidebar(){
    $('.sidebar-nav').toggleClass('active');
    $('#overlay').toggleClass('activated');

}

function switchToCard(card) {
        maximizeCardAndHideOthers(card);
        toggleSidebar();
    }

function hideAllCards(){
    $('.card').parent().addClass('d-none').removeClass('d-sm-block');
}

// Only when viewport > xs, info card always hidden
function showAllCards(){
    $('.card ').parent().addClass('d-sm-block');
    /* Hiding information card if existing*/
    $('#info').parent().removeClass('d-sm-block').addClass('d-none');
}

function showCard(card){
    $(card).parent().removeClass('d-none');
}

function maxCardSize(card) {
    $(card).parent().removeClass('col-sm-6 col-md-4').addClass('col-12');
}

function stopEdition(){
    $('.clickable-table-row .variable-form:visible').hide();
    startMonitoring();
}

function resetAllCardSize(){
    $('.card').parent().removeClass('col-12').addClass('col-sm-6 col-md-4');
    $('.card').each(function(){
        resetInputGroups($(this));
    })
    stopEdition();
    showAllCards();
}

function maximizeCardAndHideOthers(card) {
    hideAllCards();
    showCard(card);
    maxCardSize(card);
}

function isMaxSize(card){
    return $(card).parent().hasClass('col-12');
}

function clickOnCard(card){
    if (isMaxSize(card)){

        resetInputGroups(card);

        resetAllCardSize();
        if ($(card).attr("id") == "info") {
            showCard($('.card').first());
        }
    } else {
        maximizeCardAndHideOthers(card);
    }
}

function switchToAll(){
    resetAllCardSize();
    toggleSidebar();
}

function toggleRow(row){
    $(row).find(".hiding").toggleClass("hide");
}

function resetInputGroups(card) {
    $(card).find('.input-group').each(function(){
        if (!$(this).hasClass('hide')) {
            var parentRow = $(this).closest('tr') 
            toggleRow(parentRow);
        }
    })
}