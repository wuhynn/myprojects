
  //var p = prompt("Boo");
window.onload = function(){
    generate();
};



function generate(){
  //Store an array of colors
  var colorArray = ["#0074D9", "#001f3f", "#01FF70", "#FFDC00",
                    "#FF4136", "#FF851B", "#111111", "#2ECC40", "#85144b"];

  //Generate random number based on array length
  var randomColorNum = Math.floor(Math.random() * colorArray.length);

  //Link to API
  var link = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

  document.body.style.backgroundColor = colorArray[randomColorNum];

  $.ajaxSetup({cache:false});

  $.getJSON(link , function(json) {
    $(".quote").html("\"" + json[0].content + "\"<br><br>" + "— " + json[0].title)
  });
}
