var index = 2;

var PostIt = function(e) {
    var $post_it = $("#master").clone();
    $post_it.css({'top': e.pageY + 'px', 'left': e.pageX + 'px', display: 'block', 'z-index': ++index})
    .draggable({ handle: ".header" });
    $post_it.on("click", function(e){
      e.stopPropagation();
    });
    $post_it.on("mousedown", function(e){
      $(this).css({'z-index': ++index});
    });
    $("#board").append($post_it);
};

$("#board").on("click", function(e){
  console.log(e.target)
  if (e.target.className != "content" &&
      e.target.className != "header" &&
      e.target.className != "post-it"){
    myPostIt = new PostIt(e)
  }
});
