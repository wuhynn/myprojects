
$(document).ready(function() {
    console.log( "ready!" );

  genColor();
  //genQuote();
  var resultStr = genQuote();
  console.log(resultStr);

  $('#get').on("click", function(){
      location.reload();
  });

  $('#tweet').click(function(){
    console.log("Twitter button pressed");
    //window.open("https://twitter.com/intent/tweet?text=" + "\"" + quotes[randomQuote] + " \" - " + author[randomQuote]);

    window.open("https://twitter.com/intent/tweet?text=" + resultStr);
  });


});

function genQuote(){
  var quotes = ["How lucky I am to have something that makes saying goodbye so hard.",
                "The best thing to hold onto in life is each other.",
                "An investment in knowledge pays the best interest.",
                "It is our choices, Harry, that show what we truly are, far more than our abilities.",
                "It does not do to dwell on dreams and forget to live.",
                "People find it far easier to forgive others for being wrong than being right.",
                "What you fear most of all is– fear. Very wise.",
                "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals",
                "A real friend is one who walks in when the rest of the world walks out.",
                "You can cut all the flowers but you cannot keep spring from coming.",
                "A child who does not play is not a child, but the man who doesn't play has lost forever the child who lived in him and who he will miss terribly.",
                "Green was the silence, wet was the light, the month of June trembled like a butterfly....",
                "Believe you can and you're halfway there.",
                "There is nothing on this earth more to be prized than true friendship."];

  var author = ["Winnie the Pooh", "Audrey Hepburn", "Benjamin Franklin", "Albus Dumbledore", "Albus Dumbledore",
                "Albus Dumbledore", "Remus Lupin", "Sirius Black", "Walter Winchell", "Pablo Neruda",
                "Pablo Neruda", "Pablo Neruda", "Teddy Roosevelt", "Thomas Aquinas"];

  var randomQuote = Math.floor(Math.random() * quotes.length);

  $("#quotes").html(quotes[randomQuote]);
  $("#author").html(author[randomQuote]);

  var string = "\"" + quotes[randomQuote] + "\" - " + author[randomQuote];

  return string;
}

function genColor(){
  //Store an array of colors
  var colorArray = ["#0074D9", "#01FF70", "#FFDC00", "#39CCCC",
                    "#FF4136", "#FF851B", "#2ECC40", "#7FDBFF", "#FFFFFF"];

  //Generate random number based on array length
  var randomColorNum = Math.floor(Math.random() * colorArray.length);

  document.body.style.backgroundColor  = colorArray[randomColorNum];

}
