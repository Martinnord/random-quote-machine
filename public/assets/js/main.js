$(document).ready(function(){

  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out"
  });

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
            console.log(quote.length);

            $("#quote").text(quote);
            if (author) {
                $("#author").text(" - " + author);
            } else {
                $("#author").text(" - Secret");
            }

            if (quote.length > 120) {
                $("#quote").css("font-size", "1.3em");
            } else {
                $(".typo").css("font-size", "1.5em")
            }
        }
    });
   }
    $("#newQuoteBtn").on("click", function(){
        getNewQuote();
    });

    $("#newQuoteBtn").on("click", function() {
        console.log("Hello!");
    });


    $("#tweetThis").on("click", function(){
        var text = $("#quote").text();
        var author = $("#author").text();

        $("#tweetThis").attr("href", "https://twitter.com/intent/tweet?text=" + text + author);
    });

    getNewQuote();
});
