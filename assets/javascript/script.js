
var topics = ("Jim Halpert", "Pam Beesly", "Dwight Schrute", "Michael Scott", "Stanley Hudson", "Toby Flenderson", "Oscar Martinez", "Kevin Malone", "Meredith Office", "Nard Dog");

for (i = 0; i < topics.length; i++) {

};

$("button").on("click", function() {
    var topics = $(this).attr("data-person");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topics + "&api_key=xD23MaYKjAXVsPYaXqkqTKtsqdgB54Qm&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
      });
  });