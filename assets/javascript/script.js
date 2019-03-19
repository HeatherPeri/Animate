// var topics = ("Jim Halpert", "Pam Beesly", "Dwight Schrute", "Michael Scott", "Stanley Hudson", "Toby Flenderson", 
// "Oscar Martinez", "Kevin Malone", "Meredith Office", "Andy Bernard");

// for (i = 0; i < topics.length; i++) {

// };

$("button").on("click", function() {
  var person = $(this).attr("data-person");
  //   var state = $(this).attr("data-state");

  //   if (state === "still") {
  //     $(this).attr("button", $(this).attr("data-animate"));
  //     $(this).attr("data-state", "animate");
  //   } else {
  //     $(this).attr("button", $(this).attr("data-still"));
  //     $(this).attr("data-state", "still");
  //   }

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;
      console.log(results, "results");

      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var Image = $("<img>");

          // var animate = Image.attr("src", results[i].images.fixed_height.url);
          // var still = Image.attr("src", results[i].images.fixed_height_still.url);
          var animate = results[i].images.fixed_height.url;
          var still = results[i].images.fixed_height_still.url;

          Image.attr("src", still);
          // Image.attr("src", animate);

          Image.attr("data-animate", animate);
          Image.attr("data-still", still);
          Image.attr("data-state", "still");

          gifDiv.append(p);
          gifDiv.append(Image);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      }


});
});

$(document).on("click", "img", function() {
  console.log("this is working");
  var state = $(this).attr("data-state");
  console.log(state, "state");
  if (state === "still") {
    var click = $(this);
    console.log(click, "clicking this")
    var animated = click.attr("data-animate");
    click.attr("src", "animate");
    console.log ("animate", "this should animate")

    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

