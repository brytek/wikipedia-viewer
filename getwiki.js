function getSearchResults(data) {
  var results = data.query.search;
  $("#results").html('');
  for (var i = 0; i < results.length; i++) {
    var link = "https://en.wikipedia.org/wiki/" + results[i].title;
    $("#results").append("<div class='result'><h2><a target='_blank' href=" + link + ">" + results[i].title + "</a></h2><br><p>" + results[i].snippet + "</p></div>");
  } 
}

$("#submit").click(function(event){
  event.preventDefault();
  var searchTerm = $("input[name='search']").val();
  var url = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?";
  $.ajax({
    type: "GET",
    url: url,
    async: false,
    dataType: "jsonp",
    success: function(data) {
      getSearchResults(data);
    }
  })
});
