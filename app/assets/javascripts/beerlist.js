var BEERS = {};

BEERS.show = function(){
    var beer_list = [];

    $.each(BEERS.list, function (index, beer) {
        beer_list.push('<li>' + beer['name'] + '</li>')
    });

    $("#beers").html('<ul>'+ beer_list.join('') + '</ul>');
};

$(document).ready(function () {

    $.getJSON('beers.json', function (beers) {
        BEERS.list = beers;
        BEERS.show();
     });
});