$( document ).ready(function() {
    console.log( "ready!" );


var topics  = ["videogames", "skateboard" , "tattoos" , "coffee" , "jdm cars" , "NYC" , "lofi" , "rap" , "punk-rock"]



function mkbut (){
  $("#buttonHold").empty()
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>")
    a.addClass("gif")
    a.attr("value", topics[i])
    a.text(topics[i])
    $("#buttonHold").append(a)
  }
  $(document.body).on("click", ".giphy", function() {

    var state = $(this).attr("data-state");
    console.log(state);

    if (state === "animated") {
      $(this).attr("src", $(this).attr("data-animat"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }

  });

}
mkbut();


  $(document.body).on("click" , ".gif", function(){
    var topics = $(this).attr("value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topics + "&api_key=IC2G7FVPJctOIXUe26c283jpHlUlZCbk";
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response){
        var results = response.data;
       for (var i = 0; i < results.length; i++) {

         if (results[i].rating !== "r" && results[i].rating !== "R") {
           var gifDiv = $("<div class='item'>");

           var rating = results[i].rating;

           var p = $("<p>").text("Rating: " + rating);

           var Image = $("<img>");
           $("image").attr("scr")

           Image.attr("src", results[i].images.fixed_height.url);
           Image.attr("data-state" , "animate")
           Image.attr("data-animate", results[i].images.fixed_height.url);
           Image.attr("data-still", results[i].images.fixed_height.url);
           Image.addClass("giphy")

           gifDiv.append(p);
           gifDiv.append(Image);


           $("#gifs-appear-here").prepend(gifDiv);

      }}

  })


});

$("#addbtn").on("click", function(){
var addTopic = $("#submit").val().trim()
topics.push(addTopic)
mkbut();


});












});
