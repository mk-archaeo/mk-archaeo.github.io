
$("document").ready(function() {
  $("#tags").children("p").find("*").click(function(){
    if ($(this).text().trim() === "github") {
      $(this).attr("href", "http://www.github.com");
    }
    else if ($(this).text().trim() === "jekyll") {
      $(this).attr("href", "http://www.jekyllrb.com");
    }
    else {
      // $(this).attr("href", "http://www.google.com/search?q=" + $(this).text().trim());
      $(this).attr("href", "../../../../tags/index.html#" + $(this).text().trim());
    }
  });
});
