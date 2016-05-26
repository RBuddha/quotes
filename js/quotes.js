var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(response) {
    $("#quote-text").text(response.quoteText);
    var quotation = 'https://twitter.com/intent/tweet?text=' + response.quoteText + '%0A ~ ' + response.quoteAuthor + ' @not_my_real_handle';
    if (response.quoteAuthor === '') {
        response.quoteAuthor = 'Unknown';
    }
    $("#author-text").text(response.quoteAuthor);
    $("#tweet").attr("href", quotation);
};
$(document).ready(function() {
    $.getJSON(url, getQuote, 'jsonp');
});

$("#quote").click(function() {
    $.getJSON(url, getQuote, 'jsonp');
});

