$(document).ready(function(){

   function getNewQuote() {
    $.ajax({
       url: 'http://api.forismatic.com/api/1.0/',
       jsonp: 'jsonp',
       dataType: 'jsonp',
       data: {
           method: 'getQuote',
           lang: 'en',
           format: 'jsonp'
       },
        success: function(response) {
            var quote = response.quoteText;
            var author = response.quoteAuthor;
            $("#quote").text(quote);
            if (author) {
                $("#author").text(" - " + author);
            } else {
                $("#author").text(" - Secret");
            }
        }    
    }); 
   }
    
    $("#newQuoteBtn").on("click", function(){
        getNewQuote();
    });
    
    $("#tweetThis").on("click", function(){
        var text = $("#quote").text();
        var author = $("#author").text();
        
        $("#tweetThis").attr("href", "https://twitter.com/intent/tweet?text=" + text + author);
    });
    
    getNewQuote();
});